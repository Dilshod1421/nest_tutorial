import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserCard } from './models/user_card.model';
import { CreateCartDto } from '../cart/dto/create-cart.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';

@Injectable()
export class UserCardService {
  constructor(@InjectModel(UserCard) private userCardRepo: typeof UserCard) {}

  async createUserCard(createCartDto: CreateCartDto) {
    const newUserCard = await this.userCardRepo.create(createCartDto);
    return newUserCard;
  }

  async getAllUserCards() {
    const result = await this.userCardRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getUserCardById(id: number) {
    const result = await this.userCardRepo.findByPk(id);
    return result;
  }

  async updateUserCard(id: number, updateUserCardDto: UpdateUserCardDto) {
    const result = await this.userCardRepo.update(updateUserCardDto, {
      where: { id },
    });
    return result;
  }

  async deleteUserCard(id: number): Promise<number> {
    const result = await this.userCardRepo.destroy({ where: { id } });
    return result;
  }
}
