import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AdminAttr {
  username: string;
  email: string;
  telegram_link: string;
  admin_photo: string;
  hashed_password: string;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, AdminAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telegram_link: string;

  @Column({
    type: DataType.STRING,
  })
  admin_photo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creater: boolean;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
