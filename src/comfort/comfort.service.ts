import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comfort } from './models/comfort.model';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo: typeof Comfort) {}

  async createComfort(createComfortDto: CreateComfortDto) {
    const newComfort = await this.comfortRepo.create(createComfortDto);
    return newComfort;
  }

  async getAllComforts() {
    const comfort = await this.comfortRepo.findAll({ include: { all: true } });
    return comfort.sort((a, b) => a.id - b.id);
  }

  async getComfortById(id: number) {
    const comfort = await this.comfortRepo.findByPk(id);
    return comfort;
  }

  async updateComfort(id: number, updateComfortDto: UpdateComfortDto) {
    const comfort = await this.comfortRepo.update(updateComfortDto, {
      where: { id },
    });
    return comfort;
  }

  async deleteComfort(id: number): Promise<number> {
    const result = await this.comfortRepo.destroy({ where: { id } });
    return result;
  }
}
