import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateComfortDto } from '../comfort/dto/update-comfort.dto';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region) {}

  async createRegion(createRegionDto: CreateRegionDto) {
    const newRegion = await this.regionRepo.create(createRegionDto);
    return newRegion;
  }

  async getAllRegions() {
    const region = await this.regionRepo.findAll({ include: { all: true } });
    return region.sort((a, b) => a.id - b.id);
  }

  async getRegionById(id: number) {
    const region = await this.regionRepo.findByPk(id);
    return region;
  }

  async updateRegion(id: number, updateComfortDto: UpdateComfortDto) {
    const Region = await this.regionRepo.update(updateComfortDto, {
      where: { id },
    });
    return Region;
  }

  async deleteRegion(id: number): Promise<number> {
    const result = await this.regionRepo.destroy({ where: { id } });
    return result;
  }
}
