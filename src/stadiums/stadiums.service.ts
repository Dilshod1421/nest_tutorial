import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { Stadium } from './models/stadium.model';
import { InjectModel } from '@nestjs/sequelize';
import { AddComfortDto } from './dto/add-comfort.dto';
import { ComfortService } from '../comfort/comfort.service';

@Injectable()
export class StadiumsService {
  constructor(@InjectModel(Stadium) private stadiumRepo: typeof Stadium, private comfortService: ComfortService){}

  async create(createStadiumDto: CreateStadiumDto) {
    const newStadium = await this.stadiumRepo.create(createStadiumDto);
    await newStadium.$set('comforts', []);
    await newStadium.save();
    return newStadium;
  }

  async findAll() {
    return await this.stadiumRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.stadiumRepo.findOne({where: {id}, include: {all:true}});
  }

  async update(id: number, updateStadiumDto: UpdateStadiumDto) {
    return await this.stadiumRepo.update(updateStadiumDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.stadiumRepo.destroy({where: {id}});
  }

  async addComfort(addComfortDto: AddComfortDto){
    const stadium = await this.stadiumRepo.findByPk(addComfortDto.stadium_id);
    const comfort = await this.comfortService.findOne(addComfortDto.comfort_id);
    
    if(stadium && comfort){
      await stadium.$add('comforts', comfort.id);
      return stadium;
    }

    throw new HttpException(
      "Comfort yoki stadion topilmadi",
      HttpStatus.NOT_FOUND
    )
  };


}
