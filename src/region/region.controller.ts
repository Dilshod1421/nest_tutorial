import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('Region lar bo`limi')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({summary: 'Shahar yaratish'})
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({summary: 'Shaharlarni ko`rish'})
  @Get("all")
  findAll() {
    return this.regionService.findAll();
  }
  
  @ApiOperation({summary: 'Bitta Shaharni ko`rish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }
  
  @ApiOperation({summary: 'Bitta Shaharni o`zgartirish'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }
  
  @ApiOperation({summary: 'Bitta Region(tuman)ni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
