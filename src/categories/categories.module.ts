import { Module } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { Category } from './models/category.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryController } from './categories.controller';

@Module({
  imports: [SequelizeModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoriesModule {}
