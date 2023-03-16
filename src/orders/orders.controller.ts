import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('Buyurtmalr(Order) lar bo`limi')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({summary: 'Buyurtma yaratish'})
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @ApiOperation({summary: 'Hamma buyurtmalarni ko`rish'})
  @Get('all')
  findAll() {
    return this.ordersService.findAll();
  }

  @ApiOperation({summary: 'Bitta buyurtmani ko`rish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta buyurtmani o`zgartirish'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @ApiOperation({summary: 'Bitta buyurtmani o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
