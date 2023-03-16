import { Module } from '@nestjs/common';
import { StadiumTimesService } from './stadium_times.service';
import { StadiumTimesController } from './stadium_times.controller';
import { StadiumTime } from './models/stadium_time.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([StadiumTime])],
  controllers: [StadiumTimesController],
  providers: [StadiumTimesService]
})
export class StadiumTimesModule {}
