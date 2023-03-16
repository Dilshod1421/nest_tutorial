import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './models/media.model';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';

@Injectable()
export class MediaService {

  constructor(@InjectModel(Media) private mediaRepo: typeof Media, private readonly fileService: FilesService){}

  async create(createMediaDto: CreateMediaDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const newUser = await this.mediaRepo.create({...createMediaDto, photo: fileName});

    return newUser;
  }

  async findAll() {
    return await this.mediaRepo.findAll({include:{all:true}});
  }

  async findOne(id: number) {
    return await this.mediaRepo.findOne({where:{id},include:{all:true}});
  }

  async update(id: number, updateMediaDto: UpdateMediaDto, image?: any) {
    if(image){
      const fileName = await this.fileService.createFile(image);
      const media = await this.mediaRepo.update({...updateMediaDto, photo: fileName}, {where: {id}});
      return media;
    }
    const media = await this.mediaRepo.update({...updateMediaDto}, {where: {id}, returning: true});
    return media[1][0];
  }

  async remove(id: number) {
    return await this.mediaRepo.destroy({where:{id}});
  }
}
