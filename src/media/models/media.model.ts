import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';

interface MediaAttr {
  stadium_id: number;
  photo: string;
  description: string;
}

@Table({ tableName: 'media' })
export class Media extends Model<Media, MediaAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  // STADIUM
  @ForeignKey(() => Stadium)
  @Column({
    type: DataType.INTEGER,
  })
  stadium_id: number;

  @BelongsTo(() => Stadium)
  stadium: Stadium[];
}
