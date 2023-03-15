import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { UserWallet } from './models/user_wallet.model';

@Injectable()
export class UsersWalletService {
  constructor(
    @InjectModel(UserWallet) private userWalletRepo: typeof UserWallet,
  ) {}

  async createUserWallet(createUserWalletDto: CreateUserWalletDto) {
    const newUserWallet = await this.userWalletRepo.create(createUserWalletDto);
    return newUserWallet;
  }

  async getAllUserWallets() {
    const userWallets = await this.userWalletRepo.findAll({
      include: { all: true },
    });
    return userWallets.sort((a, b) => a.id - b.id);
  }

  async getUserWalletById(id: number) {
    const userWallet = await this.userWalletRepo.findByPk(id);
    return userWallet;
  }

  async updateUserWallet(id: number, updateUserWalletDto: UpdateUserWalletDto) {
    const wallet = await this.userWalletRepo.update(updateUserWalletDto, {
      where: { id },
    });
    return wallet;
  }

  async deleteUserWallet(id: number): Promise<number> {
    const result = await this.userWalletRepo.destroy({ where: { id } });
    return result;
  }
}
