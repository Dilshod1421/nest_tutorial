import { Injectable } from '@nestjs/common';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { UserWallet } from './models/user_wallet.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserWalletService {
  constructor(@InjectModel(UserWallet) private userWalletRepo: typeof UserWallet){}

  async create(createUserWalletDto: CreateUserWalletDto) {
    return this.userWalletRepo.create(createUserWalletDto);
  }

  async findAll() {
    return this.userWalletRepo.findAll({include: {all:true}});
  }

  async findOne(id: number) {
    return this.userWalletRepo.findOne({where: {id}, include: {all:true}});
  }

  async update(id: number, updateUserWalletDto: UpdateUserWalletDto) {
    return this.userWalletRepo.update(updateUserWalletDto, {where: {id}});
  }

  async remove(id: number) {
    return  this.userWalletRepo.destroy({where: {id}});
  }
}
