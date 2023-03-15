import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models/category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryRepo: typeof Category) {}

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepo.create(createCategoryDto);
    return newCategory;
  }

  async getAllCategorys() {
    const result = await this.categoryRepo.findAll({ include: { all: true } });
    return result;
  }

  async getCategoryById(id: number) {
    const result = await this.categoryRepo.findByPk(id);
    return result;
  }

  async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
    const result = await this.categoryRepo.update(updateCategoryDto, {
      where: { id },
    });
    return result;
  }

  async deleteCategory(id: number): Promise<number> {
    const result = await this.categoryRepo.destroy({ where: { id } });
    return result;
  }
}
