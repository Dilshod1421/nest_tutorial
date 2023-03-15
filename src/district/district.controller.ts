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
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@ApiTags('District')
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: 'Create a district' })
  @Post()
  createComfort(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.createDistrict(createDistrictDto);
  }

  @ApiOperation({ summary: 'Get all district' })
  @Get()
  getAllComforts() {
    return this.districtService.getAllDistricts();
  }

  @ApiOperation({ summary: 'Get district' })
  @Get(':id')
  getComfortById(@Param('id') id: string) {
    return this.districtService.getDistrictById(+id);
  }

  @ApiOperation({ summary: 'Update district' })
  @Put(':id')
  async updateComfort(
    @Param('id') id: number,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return await this.districtService.updateDistrict(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async deleteComfort(@Param('id') id: number): Promise<number> {
    return await this.districtService.deleteDistrict(id);
  }
}
