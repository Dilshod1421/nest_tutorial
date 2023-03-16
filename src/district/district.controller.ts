import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('District lar bo`limi')
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({summary: 'District yaratish'})
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({summary: 'Districtlarni ko`rish'})
  @Get('all')
  findAll() {
    return this.districtService.findAll();
  }

  @ApiOperation({summary: 'BItta Districtni ko`rish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({summary: 'BItta Districtni o`zgartirish'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({summary: 'BItta Districtni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtService.remove(+id);
  }
}
