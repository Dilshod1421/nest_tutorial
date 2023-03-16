import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpCode, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login-auth.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('Auth bo`limi')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @ApiOperation({summary: 'registratsiya'})
  // @Post('registration')
  // @UseInterceptors(FileInterceptor('image'))
  // create(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true}) res: Response, @UploadedFile() image?: any) {
  //   return this.authService.registration(createUserDto, image);
  // }
  
  @ApiOperation({summary: 'login'})
  @HttpCode(200)
  @Post('/login')
  login(@Body() loginDto: LoginDto  ){
    return this.authService.login(loginDto)
  }

  
}
