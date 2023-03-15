import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CategoryService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Create a category' })
  @Post()
  createComfort(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @ApiOperation({ summary: 'Get all category' })
  @Get()
  getAllComforts() {
    return this.categoryService.getAllCategorys();
  }

  @ApiOperation({ summary: 'Get category' })
  @Get(':id')
  getComfortById(@Param('id') id: string) {
    return this.categoryService.getCategoryById(+id);
  }

  @ApiOperation({ summary: 'Update category' })
  @Put(':id')
  async updateComfort(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.updateCategory(+id, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @Delete(':id')
  async deleteComfort(@Param('id') id: number): Promise<number> {
    return await this.categoryService.deleteCategory(id);
  }
}
