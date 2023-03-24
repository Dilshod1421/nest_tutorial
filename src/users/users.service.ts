import { BadRequestException, ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import * as bcrypt from 'bcrypt';
import * as uuid from 'uuid';
import { JwtService } from '@nestjs/jwt';
import { Response } from "express"
import { LoginUserDto } from './dto/login-user.dto';
import { MailService } from '../mail/mail.service';
import * as otpGenerator from 'otp-generator';
import { PhoneUserDto } from './dto/phone-user.dto';
import { BotService } from 'src/bot/bot.service';
import { Otp } from 'src/otp/models/otp.model';
import { Op } from 'sequelize';
import { AddMinutesToDate } from 'src/helpers/addMinutes';
import { v4 } from 'uuid';
import { encode, decode, dates } from 'src/helpers/crypto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { FindUserDto } from './dto/findUserDto';
export interface Tokens {
  access_token: string;
  refresh_token: string
}


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepo: typeof User,
    @InjectModel(Otp) private otpRepo: typeof Otp,
    private readonly fileService: FilesService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
    private readonly botService: BotService
  ) { }

  async registration(createUserDto: CreateUserDto, res: Response) {
    const user = await this.userRepo.findOne({
      where: { username: createUserDto.username }
    });

    if (user) {
      throw new BadRequestException('Username is of exist!');
    };
    if (createUserDto.password !== createUserDto.confirm_password) {
      throw new BadRequestException('Password is not match!');
    };

    const hashed_password = await bcrypt.hash(createUserDto.password, 7);
    const newUser = await this.userRepo.create({
      ...createUserDto,
      hashed_password: hashed_password
    });
    const tokens = await this.generateToken(newUser)
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7)
    const uniqueKey: string = uuid.v4();
    const updateUser = await this.userRepo.update(
      { hashed_refresh_token: hashed_refresh_token, activation_link: uniqueKey },
      { where: { id: newUser.id }, returning: true }
    );

    await this.mailService.sendUserConfirmation(updateUser[1][0])
    return this.writingCookie(tokens, updateUser[1][0], res, 'User registrated');
  }


  async login(loginUserDto: LoginUserDto, res: Response) {
    const { email, password } = loginUserDto;
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new BadRequestException('User not registered!!');
    };
    const isMatchPass = await bcrypt.compare(password, user.hashed_password);
    if (!isMatchPass) {
      throw new BadRequestException('User not registered(pass)!!');
    };

    const tokens = await this.generateToken(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: user.id }, returning: true }
    );
    return this.writingCookie(tokens, updatedUser[1][0], res, 'User logged in');
  }


  async logout(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });

    if (!userData) {
      throw new ForbiddenException('User not found');
    };

    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: null },
      { where: { id: userData.id }, returning: true }
    );

    res.clearCookie('refresh_token');
    const response = {
      message: 'User logged out',
      user: updatedUser[1][0],
    };
    return response;
  }


  async activate(link: string) {
    if (!link) {
      throw new BadRequestException('Activation link not found!');
    };

    const updatedUser = await this.userRepo.update(
      { is_active: true },
      { where: { activation_link: link, is_active: false }, returning: true }
    );
    const reponse = {
      message: "User activated successfully",
      user: updatedUser[1][0]
    }

    if (updatedUser[1][0]) {
      throw new BadRequestException('User already activated')
    };
    return reponse;
  }


  async refreshToken(user_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (user_id != decodedToken['id']) {
      throw new BadRequestException('User not found');
    };

    const user = await this.userRepo.findOne({ where: { id: user_id } });
    if (!user || !user.hashed_refresh_token) {
      throw new BadRequestException('User not found');
    };

    const tokenMatch = await bcrypt.compare(refreshToken, user.hashed_refresh_token);
    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    };

    const tokens = await this.generateToken(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: user.id }, returning: true }
    );
    return this.writingCookie(tokens, updatedUser[1][0], res, 'Token updated');
  }


  private async generateToken(user: User) {
    const jwtPayload = { id: user.id, is_active: user.is_active, is_owner: user.is_owner };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken
    };
  }


  async writingCookie(tokens: Tokens, user: User, res: Response, message: string) {
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });
    const response = {
      message: `${message}`,
      user,
      tokens
    };
    return response;
  }


  async newOtp(phoneUserDto: PhoneUserDto) {
    console.log(phoneUserDto);

    const phone_number = phoneUserDto.phone;
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false
    });
    const is_send = await this.botService.sendOTP(phone_number, otp);
    if (!is_send) {
      throw new HttpException("Avval botdan ro'yxatdan o'ting", HttpStatus.BAD_REQUEST);
    };
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    await this.otpRepo.destroy({ where: { [Op.and]: [{ check: phone_number }, { verified: false }] } });
    const new_otp = await this.otpRepo.create({ id: v4(), otp, expiration_time, check: phone_number });
    const details = {
      timestamp: now, check: phone_number, success: true, message: "OTP send to user", otp_id: new_otp.id
    };
    const encoded = await encode(JSON.stringify(details));
    return { status: 'Success', Details: encoded };
  }


  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { verification_key, otp, check } = verifyOtpDto;
    const currentdate = new Date();
    const decoded = await decode(verification_key);
    const obj = JSON.parse(decoded);
    const check_obj = obj.check;
    if (check_obj != check)
      throw new BadRequestException('OTP bu raqamga yuborilmagan');
    const result = await this.otpRepo.findOne({ where: { id: obj.otp_id } });
    if (result != null) {
      if (!result.verified) {
        if (dates.compare(result.expiration_time, currentdate)) {
          if (otp === result.otp) {
            const user = await this.userRepo.findOne({
              where: { phone: check },
            });
            console.log(user);
            if (user) {
              const updatedUser = await this.userRepo.update(
                { is_owner: true },
                { where: { id: user.id }, returning: true },
              );
              await this.otpRepo.update(
                { verified: true }, { where: { id: obj.otp_id }, returning: true }
              )
              const response = {
                message: 'User updated as owner',
                user: updatedUser[1][0],
              };
              return response;
            }
          } else {
            throw new BadRequestException('Otp is not match');
          }
        } else {
          throw new BadRequestException('Otp expired');
        }
      } else {
        throw new BadRequestException('Otp already used');
      }
    } else {
      throw new BadRequestException('User not found');
    }
  }


  async searchUsers(findUserDto: FindUserDto) {
    const where = {};
    if (findUserDto.first_name) {
      where['first_name'] = { [Op.like]: `%${findUserDto.first_name}%` };
    };
    if (findUserDto.last_name) {
      where['last_name'] = { [Op.like]: `%${findUserDto.last_name}%` };
    };
    if (findUserDto.username) {
      where['username'] = { [Op.like]: `%${findUserDto.username}%` };
    };
    if (findUserDto.email) {
      where['email'] = { [Op.like]: `%${findUserDto.email}%` };
    };
    if (findUserDto.phone) {
      where['phone'] = { [Op.like]: `%${findUserDto.phone}%` };
    };
    if (findUserDto.birthday_begin && findUserDto.birthday_end) {
      where['birthday'] = { [Op.between]: [findUserDto.birthday_begin, findUserDto.birthday_end] };
    };
    if (findUserDto.birthday_begin) {
      where['birthday'] = { [Op.gte]: findUserDto.birthday_begin };
    };
    if (findUserDto.birthday_end) {
      where['birthday'] = { [Op.lt]: findUserDto.birthday_begin };
    };
    const search = await this.userRepo.findAll({ where });
    if (!search) {
      throw new BadRequestException('User not found!');
    };
    return search;
  }


  async findAll() {
    return await this.userRepo.findAll({ include: { all: true } });
  }


  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id }, include: { all: true } });
    return user;
  }


  async findOneUsername(username: string) {
    const user_with_username = await this.userRepo.findOne({ where: { username }, include: { all: true } });
    return user_with_username;
  }


  async getUserByEmail(email: string) {
    const user = await this.userRepo.findOne({
      where: { email },
      include: { all: true }
    });
    return user;
  }


  async remove(id: number) {
    return await this.userRepo.destroy({ where: { id } });
  }


  async updateUser(updateUserDto: UpdateUserDto, id: number) {
    const user = await this.userRepo.update({ ...updateUserDto }, { where: { id }, returning: true });
    return user[1][0];
  }


}
