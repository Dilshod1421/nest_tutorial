import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';

interface UserCardAttr {
  userId: number;
  name: string;
  phone: string;
  number: string;
  year: number;
  month: number;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: 'user-card' })
export class UserCard extends Model<UserCard, UserCardAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  number: string;

  @Column({
    type: DataType.INTEGER,
  })
  year: number;

  @Column({
    type: DataType.INTEGER,
  })
  month: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
