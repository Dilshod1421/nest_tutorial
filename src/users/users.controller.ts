import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtGuard } from '../guards/jwt-auth.guard';
import { UserSelfGuard } from '../guards/user-self.guard';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { UpdateUserDto } from './dto/update-user.dto';


@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiOperation({ summary: 'Registration' })
  @Post('signup')
  registration(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    return this.usersService.registration(createUserDto, res);
  }


  @ApiOperation({ summary: 'Login' })
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) res: Response) {
    return this.usersService.login(loginUserDto, res);
  }


  @ApiOperation({ summary: 'Logout' })
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(@CookieGetter('refresh_token') refreshToken: string, @Res({ passthrough: true }) res: Response) {
    return this.usersService.logout(refreshToken, res);
  }


  @HttpCode(HttpStatus.OK)
  @Post(':id/refresh')
  refreshToken(@Param('id') id: number, @CookieGetter('refresh_token') refreshToken: string, @Res({ passthrough: true }) res: Response) {
    return this.usersService.refreshToken(id, refreshToken, res);
  }


  @Get('activate/:link')
  activate(@Param('link') link: string) {
    return this.usersService.activate(link)
  }


  @ApiOperation({ summary: 'Get all users' })
  @UseGuards(JwtGuard)
  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }


  @ApiOperation({ summary: 'Get user by ID' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }


  @ApiOperation({ summary: 'Get user by username' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Get(':username')
  findOneUsername(@Param('username') username: string) {
    return this.usersService.findOneUsername(username);
  }


  @ApiOperation({ summary: 'Get user by email' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Get(':email')
  getUserByEmail(@Param('email') email: string) {
    return this.usersService.getUserByEmail(email);
  }


  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 203 })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }


  @ApiOperation({ summary: 'Update user by ID' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Post(':id')
  updateUser(@Param('id') updateUserDto: UpdateUserDto, id: string) {
    return this.usersService.updateUser(updateUserDto, +id);
  }

}
