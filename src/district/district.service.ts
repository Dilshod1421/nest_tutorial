import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/district.model';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepo: typeof District) {}

  async createDistrict(createDistrictDto: CreateDistrictDto) {
    const newDistrict = await this.districtRepo.create(createDistrictDto);
    return newDistrict;
  }

  async getAllDistricts() {
    const result = await this.districtRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getDistrictById(id: number) {
    const result = await this.districtRepo.findByPk(id);
    return result;
  }

  async updateDistrict(id: number, updateDistrictDto: UpdateDistrictDto) {
    const result = await this.districtRepo.update(updateDistrictDto, {
      where: { id },
    });
    return result;
  }

  async deleteDistrict(id: number): Promise<number> {
    const result = await this.districtRepo.destroy({ where: { id } });
    return result;
  }
}
