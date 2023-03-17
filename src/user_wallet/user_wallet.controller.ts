import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserSelfGuard } from '../guards/user-self.guard';
import { JwtGuard } from '../guards/jwt-auth.guard';


@ApiTags('User-wallet')
@Controller('user-wallet')
export class UserWalletController {
  constructor(private readonly userWalletService: UserWalletService) { }

  @ApiOperation({ summary: 'Create a user_wallet' })
  // @UseGuards(JwtGuard)
  @Post()
  create(@Body() createUserWalletDto: CreateUserWalletDto) {
    return this.userWalletService.create(createUserWalletDto);
  }


  @ApiOperation({ summary: 'Get all user_wallets' })
  // @UseGuards(JwtGuard)
  @Get('all')
  findAll() {
    return this.userWalletService.findAll();
  }


  @ApiOperation({ summary: 'Get user_wallet by ID' })
  // @UseGuards(UserSelfGuard)
  // @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWalletService.findOne(+id);
  }


  @ApiOperation({ summary: 'Update a user_wallet' })
  // @UseGuards(UserSelfGuard)
  // @UseGuards(JwtGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserWalletDto: UpdateUserWalletDto) {
    return this.userWalletService.update(+id, updateUserWalletDto);
  }


  @ApiOperation({ summary: 'Delete a user_wallet' })
  // @UseGuards(UserSelfGuard)
  // @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWalletService.remove(+id);
  }

}
