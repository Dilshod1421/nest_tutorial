import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './models/admin.model';
import { FilesModule } from '../files/files.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([Admin]), FilesModule],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
