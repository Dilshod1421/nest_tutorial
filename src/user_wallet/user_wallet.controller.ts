import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import { UserSelfGuard } from '../guards/user-self.guard';
import { JwtGuard } from '../guards/jwt-auth.guard';


@ApiTags('User-wallet bo`limi')
@Controller('user-wallet')
export class UserWalletController {
  constructor(private readonly userWalletService: UserWalletService) {}

  @ApiOperation({summary: 'user_wallet yaratish'})
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createUserWalletDto: CreateUserWalletDto) {
    return this.userWalletService.create(createUserWalletDto);
  }

  @ApiOperation({summary: 'user_wallet larni olish'})
  @UseGuards(JwtGuard)
  @Get('all')
  findAll() {
    return this.userWalletService.findAll();
  }

  @ApiOperation({summary: 'user_wallet ni olish'})
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWalletService.findOne(+id);
  }

  @ApiOperation({summary: 'user_wallet ni yangilash'})
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserWalletDto: UpdateUserWalletDto) {
    return this.userWalletService.update(+id, updateUserWalletDto);
  }

  @ApiOperation({summary: 'user_wallet ni o`chirish'})
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWalletService.remove(+id);
  }
}
