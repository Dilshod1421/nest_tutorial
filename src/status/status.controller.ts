import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'


@ApiTags('Status lar bo`limi')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @ApiOperation({summary: 'Status yaratish'})
  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @ApiOperation({summary: 'Barcha Statuslarni olish'})
  @Get('all')
  findAll() {
    return this.statusService.findAll();
  }

  @ApiOperation({summary: 'BItta Statusni olish'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }

  @ApiOperation({summary: 'BItta Statusni yangilash'})
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }

  @ApiOperation({summary: 'BItta Statusni o`chirish'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}
