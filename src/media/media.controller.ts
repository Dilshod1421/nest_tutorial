import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('Media lar bo`limi')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiOperation({summary: 'Media yaratish'})
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createMediaDto: CreateMediaDto, @UploadedFile() image: any) {
    return this.mediaService.create(createMediaDto, image);
  }

  @ApiOperation({summary: 'Medialarni ko`rish'})
  @Get('all')
  findAll() {
    return this.mediaService.findAll();
  }

  @ApiOperation({summary: 'Bitta Mediani ko`rish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(+id);
  }

  @ApiOperation({summary: 'Bitta Mediani o`zgartirish'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto, image?: any) {
    return this.mediaService.update(+id, updateMediaDto, image);
  }

  @ApiOperation({summary: 'Bitta Mediani o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }
}
