import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './models/comment.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Comment) private commentRepo: typeof Comment){}
  async create(createCommentDto: CreateCommentDto) {
    return await this.commentRepo.create(createCommentDto);
  }

  async findAll() {
    return await this.commentRepo.findAll({include: {all:true}});
  }

  async findOne(id: number) {
    return await this.commentRepo.findOne({where: {id},include: {all:true}});
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.commentRepo.update(updateCommentDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.commentRepo.destroy({where: {id}});
  }
}
