import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';
import { Comfort } from '../../comfort/models/comfort.model';

interface ComfortStadiumAttr {
  stadium_id: number;
  category_id: number;
}

@Table({ tableName: 'comfort-stadium' })
export class ComfortStadium extends Model<ComfortStadium, ComfortStadiumAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  // STADIUM
  @ForeignKey(() => Stadium)
  @Column({
    type: DataType.INTEGER,
  })
  stadium_id: number;
  @BelongsTo(() => Stadium)
  stadium: Stadium[];

  // COMFORT
  @ForeignKey(() => Comfort)
  @Column({
    type: DataType.INTEGER,
  })
  comfort_id: number;
  @BelongsTo(() => Comfort)
  comfort: Comfort[];
}
