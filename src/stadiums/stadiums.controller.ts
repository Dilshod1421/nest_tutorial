import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { AddComfortDto } from './dto/add-comfort.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('Stadionlar bo`limi')
@Controller('stadiums')
export class StadiumsController {
  constructor(private readonly stadiumsService: StadiumsService) {}

  @ApiOperation({summary: 'Stadion yaratish'})
  @Post()
  create(@Body() createStadiumDto: CreateStadiumDto) {
    return this.stadiumsService.create(createStadiumDto);
  }

  @ApiOperation({summary: 'Stadionlarni olish'})
  @Get('all')
  findAll() {
    return this.stadiumsService.findAll();
  }

  @ApiOperation({summary: 'bitta Stadionni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stadiumsService.findOne(+id);
  }

  @ApiOperation({summary: 'bitta Stadionni o`zgartirish'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStadiumDto: UpdateStadiumDto) {
    return this.stadiumsService.update(+id, updateStadiumDto);
  }

  @ApiOperation({summary: 'bitta Stadionni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stadiumsService.remove(+id);
  }

  @ApiOperation({summary: 'Stadionga qulaylik qo`shish'})
  @Post('add_comfort')
  addComfort(@Body() addComfortDto: AddComfortDto){
    return this.stadiumsService.addComfort(addComfortDto)
  }
}
