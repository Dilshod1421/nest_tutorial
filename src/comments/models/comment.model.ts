import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Stadium } from '../../stadiums/models/stadium.model';
import { User } from '../../users/models/user.model';

interface CommentsAttr {
  user_id: number;
  stadium_id: number;
  impression: string;
}

@Table({ tableName: 'comments' })
export class Comments extends Model<Comments, CommentsAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  impression: string;

  // USER
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;
  @BelongsTo(() => User)
  user: User[];

  // STADIUM
  @ForeignKey(() => Stadium)
  @Column({
    type: DataType.INTEGER,
  })
  stadium_id: number;
  @BelongsTo(() => Stadium)
  stadium: Stadium[];
}
