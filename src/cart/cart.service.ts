import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './models/cart.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart){}

  async create(createCartDto: CreateCartDto) {
    return await this.cartRepo.create(createCartDto);
  }

  async findAll() {
    return this.cartRepo.findAll({include: {all:true}});
  }

  async findOne(id: number) {
    return this.cartRepo.findOne({where: {id}, include: {all:true}});
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return this.cartRepo.update(updateCartDto, {where: {id}});
  }

  async remove(id: number) {
    return this.cartRepo.destroy({where: {id}});
  }
}
