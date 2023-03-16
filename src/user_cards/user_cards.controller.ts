import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UserCardsService } from './user_cards.service';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'

@ApiTags('User-cards bo`limi')
@Controller('user-cards')
export class UserCardsController {
  constructor(private readonly userCardsService: UserCardsService) {}

  @ApiOperation({summary: 'User-card yaratish'})
  @Post()
  create(@Body() createUserCardDto: CreateUserCardDto) {
    return this.userCardsService.create(createUserCardDto);
  }

  @ApiOperation({summary: 'User-card larni olish'})
  @Get('all')
  findAll() {
    return this.userCardsService.findAll();
  }

  @ApiOperation({summary: 'User-card ni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCardsService.findOne(+id);
  }

  @ApiOperation({summary: 'User-card ni yangilash'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserCardDto: UpdateUserCardDto) {
    return this.userCardsService.update(+id, updateUserCardDto);
  }

  @ApiOperation({summary: 'User-card ni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCardsService.remove(+id);
  }
}
