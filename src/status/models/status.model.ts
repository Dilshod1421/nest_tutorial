import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

interface StatusAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'status' })
export class Status extends Model<Status, StatusAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  descriptions: string;

  // @HasMany(() => Stadium)
  // stadium: Stadium[];
}
