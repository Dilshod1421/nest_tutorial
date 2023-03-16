import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminRepo: typeof Admin, private readonly fileService: FilesService){}
  async create(createAdminDto: CreateAdminDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const newAdmin = await this.adminRepo.create({...createAdminDto, admin_photo: fileName});

    return newAdmin;
  }

  async findAll() {
    return await this.adminRepo.findAll({include: {all:true}});
  }

  async findOne(id: number) {
    return await this.adminRepo.findOne({where: {id}, include: {all:true}});
  }

  async update(id: number, updateAdminDto: UpdateAdminDto, image?: any) {
    if(image){
      const fileName = await this.fileService.createFile(image);
      const newUser = await this.adminRepo.update({...updateAdminDto, admin_photo: fileName}, {where: {id}});
      return newUser;
    }
    return await this.adminRepo.update(updateAdminDto, {where:{id}});
  }

  async remove(id: number) {
    return await this.adminRepo.destroy({where: {id}});
  }
}
