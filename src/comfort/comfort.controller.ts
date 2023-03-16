import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('Comfort lar bo`limi')
@Controller('comfort')
export class ComfortController {
  constructor(private readonly comfortService: ComfortService) {}

  @ApiOperation({summary: 'Comfort yaratish'})
  @Post()
  create(@Body() createComfortDto: CreateComfortDto) {
    return this.comfortService.create(createComfortDto);
  }

  @ApiOperation({summary: 'Comfortlarni olish'})
  @Get('all')
  findAll() {
    return this.comfortService.findAll();
  }

  @ApiOperation({summary: 'BItta Comfortni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comfortService.findOne(+id);
  }
  @ApiOperation({summary: 'BItta Comfortni o`zgartirish'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateComfortDto: UpdateComfortDto) {
    return this.comfortService.update(+id, updateComfortDto);
  }
  
  @ApiOperation({summary: 'BItta Comfortni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comfortService.remove(+id);
  }
}
