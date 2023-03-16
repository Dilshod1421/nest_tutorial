import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtGuard } from '../guards/jwt-auth.guard';
import { UserSelfGuard } from '../guards/user-self.guard';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './models/user.model';
import { CookieGetter } from '../decorators/cookieGetter.decorator';


@ApiTags('Users lar bo`limi')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('signup')
  registration(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    return this.usersService.registration(createUserDto, res);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) res: Response) {
    return this.usersService.login(loginUserDto, res);
  }


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


  @ApiOperation({ summary: 'Get a one user' })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }


  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 203, description: "1" })
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
