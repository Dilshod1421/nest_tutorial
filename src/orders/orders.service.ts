import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './models/order.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderRepo: typeof Order){}

  async create(createOrderDto: CreateOrderDto) {
    return await this.orderRepo.create(createOrderDto);
  }

  async findAll() {
    return await this.orderRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.orderRepo.findOne({where: {id}, include: {all: true}});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepo.update(updateOrderDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.orderRepo.destroy({where: {id}});
  }
}
