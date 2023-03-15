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
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: 'Create a region' })
  @Post()
  createComfort(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.createRegion(createRegionDto);
  }

  @ApiOperation({ summary: 'Get all regions' })
  @Get()
  getAllComforts() {
    return this.regionService.getAllRegions();
  }

  @ApiOperation({ summary: 'Get region' })
  @Get(':id')
  getComfortById(@Param('id') id: string) {
    return this.regionService.getRegionById(+id);
  }

  @ApiOperation({ summary: 'Update region' })
  @Put(':id')
  async updateComfort(
    @Param('id') id: number,
    @Body() updateRegionDto: UpdateRegionDto,
  ) {
    return await this.regionService.updateRegion(+id, updateRegionDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async deleteComfort(@Param('id') id: number): Promise<number> {
    return await this.regionService.deleteRegion(id);
  }
}
