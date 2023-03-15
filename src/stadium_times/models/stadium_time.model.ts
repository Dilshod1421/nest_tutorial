import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';

interface StadiumTimesAttr {
  stadium_id: number;
  start_time: string;
  end_time: string;
  price: number;
}

@Table({ tableName: 'stadium-times' })
export class StadiumTimes extends Model<StadiumTimes, StadiumTimesAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  start_time: string;

  @Column({ type: DataType.STRING, allowNull: false })
  end_time: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @ForeignKey(() => Stadium)
  @Column({ type: DataType.INTEGER })
  stadium_id: number;
  @BelongsTo(() => Stadium)
  stadium: Stadium[];
}
