import { Module } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { StadiumsController } from './stadiums.controller';
import { Stadium } from './models/stadium.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ComfortStadium } from './models/stadium-comfort.model';
import { ComfortModule } from '../comfort/comfort.module';
import { Comfort } from '../comfort/models/comfort.model';

@Module({
  imports:[SequelizeModule.forFeature([Stadium, ComfortStadium, Comfort]), ComfortModule],
  controllers: [StadiumsController],
  providers: [StadiumsService]
})
export class StadiumsModule {}
