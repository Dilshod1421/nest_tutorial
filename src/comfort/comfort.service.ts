import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { Comfort } from './models/comfort.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo: typeof Comfort){}
  async create(createComfortDto: CreateComfortDto) {
    const newComfort = await this.comfortRepo.create(createComfortDto);
    return newComfort;
  }

  async findAll() {
    return await this.comfortRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    const oneComfort = await this.comfortRepo.findOne({where: {id}, include: {all:true}});
    if(!oneComfort){
      throw new HttpException(
        "Categoriya topilmadi",
        HttpStatus.NOT_FOUND
      )
    }
    return oneComfort;
  }

  async update(id: number, updateComfortDto: UpdateComfortDto) {
    const updated = await this.comfortRepo.update(updateComfortDto, {where: {id}, returning: true})
    return updated[1][0];
  }

  async remove(id: number) {
    return await this.comfortRepo.destroy({where: {id}});
  }
}
