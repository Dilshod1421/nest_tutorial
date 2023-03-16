import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('cart lar bo`limi')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({summary: 'cart yaratish'})
  @Post() 
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({summary: 'Cartlarni olish'})
  @Get('all')
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({summary: 'BItta Cartni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({summary: 'BItta Cartni o`zgartirish'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({summary: 'BItta Cartni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
