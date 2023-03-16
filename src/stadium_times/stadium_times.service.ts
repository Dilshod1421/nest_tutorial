import { Injectable } from '@nestjs/common';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { StadiumTime } from './models/stadium_time.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class StadiumTimesService {

  constructor(@InjectModel(StadiumTime) private stadiumTimeRepo: typeof StadiumTime){}

  async create(createStadiumTimeDto: CreateStadiumTimeDto) {
    return await this.stadiumTimeRepo.create(createStadiumTimeDto);
  }

  async findAll() {
    return await this.stadiumTimeRepo.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return await this.stadiumTimeRepo.findOne({where: {id}, include: {all:true}});
  }

  async update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto) {
    return await this.stadiumTimeRepo.update(updateStadiumTimeDto, {where: {id}});
  }

  async remove(id: number) {
    return this.stadiumTimeRepo.destroy({where: {id}});
  }
}
