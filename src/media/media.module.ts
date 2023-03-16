import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { Media } from './models/media.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from '../files/files.module';

@Module({
  imports:[SequelizeModule.forFeature([Media]), FilesModule],
  controllers: [MediaController],
  providers: [MediaService]
})
export class MediaModule {}
