import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StadiumTimesService } from './stadium_times.service';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('Users lar bo`limi')
@Controller('stadium-times')
export class StadiumTimesController {
  constructor(private readonly stadiumTimesService: StadiumTimesService) {}

  @ApiOperation({summary: 'Stadion ishlash vaqtini va narxini kiritish'})
  @Post()
  create(@Body() createStadiumTimeDto: CreateStadiumTimeDto) {
    return this.stadiumTimesService.create(createStadiumTimeDto);
  }

  @ApiOperation({summary: 'hamma Stadionlarning ishlash vaqtini va narxini ko`rish'})
  @Get('all')
  findAll() {
    return this.stadiumTimesService.findAll();
  } 

  @ApiOperation({summary: 'Bitta Stadionning ishlash vaqtini va narxini ko`rish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stadiumTimesService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Stadionni ishlash vaqtini va narxini o`zgartirish'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStadiumTimeDto: UpdateStadiumTimeDto) {
    return this.stadiumTimesService.update(+id, updateStadiumTimeDto);
  }

  @ApiOperation({summary: 'Bitta Stadionni ishlash vaqtini va narxini o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stadiumTimesService.remove(+id);
  }
}
