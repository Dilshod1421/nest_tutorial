import { Injectable } from '@nestjs/common';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { UserCard } from './models/user_card.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserCardsService {
  constructor(@InjectModel(UserCard) private userCardRepo: typeof UserCard){}
  
  async create(createUserCardDto: CreateUserCardDto) {
    return await this.userCardRepo.create(createUserCardDto);
  }

  async findAll() {
    return await this.userCardRepo.findAll({include: {all:true}});
  }

  async findOne(id: number) {
    return await this.userCardRepo.findOne({where: {id}, include: {all:true}});
  }

  async update(id: number, updateUserCardDto: UpdateUserCardDto) {
    let update = this.userCardRepo.update(updateUserCardDto, {where: {id}, returning: true})
    return update;
  }

  async remove(id: number) {
    return await this.userCardRepo.destroy({where: {id}});
  }
}
