import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';

@Injectable()
export class CategoriesService {

  constructor (@InjectModel(Category) private categoryRepo: typeof Category){}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepo.create(createCategoryDto);
    return newCategory;
  }

  async findAll() {
    const allCategories  = await this.categoryRepo.findAll({include: {all: true}});
    return allCategories;
  }

  async findOne(id: number) {
    const oneCategory = await this.categoryRepo.findOne({where: {id}, include: {all: true}});
    if(!oneCategory){
      throw new HttpException(
        "Categoriya topilmadi",
        HttpStatus.NOT_FOUND
      )
    }
    return oneCategory;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const updateCategory = await this.categoryRepo.update(updateCategoryDto, {where: {id}, returning: true} )
    return updateCategory[1][0];
  }

  async remove(id: number) {
    await this.categoryRepo.update({parent_id: null}, {where: {parent_id: id}});
    const removeCategory = await this.categoryRepo.destroy({where: {id}})
    return removeCategory;
  }
}
