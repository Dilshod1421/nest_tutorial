import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';

@ApiTags('Comfort')
@Controller('comfort')
export class ComfortController {
  constructor(private readonly comfortService: ComfortService) {}

  @ApiOperation({ summary: 'Create a comfort' })
  @Post()
  createComfort(@Body() createComfortDto: CreateComfortDto) {
    return this.comfortService.createComfort(createComfortDto);
  }

  @ApiOperation({ summary: 'Get all comfort' })
  @Get()
  getAllComforts() {
    return this.comfortService.getAllComforts();
  }

  @ApiOperation({ summary: 'Get comfort' })
  @Get(':id')
  getComfortById(@Param('id') id: string) {
    return this.comfortService.getComfortById(+id);
  }

  @ApiOperation({ summary: 'Update comfort' })
  @Put(':id')
  async updateComfort(
    @Param('id') id: number,
    @Body() updateComfortDto: UpdateComfortDto,
  ) {
    return await this.comfortService.updateComfort(+id, updateComfortDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async deleteComfort(@Param('id') id: number): Promise<number> {
    return await this.comfortService.deleteComfort(id);
  }
}
