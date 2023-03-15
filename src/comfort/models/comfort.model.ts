import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ComfortAttr {
  name: string;
}

@Table({ tableName: 'comfort' })
export class Comfort extends Model<Comfort, ComfortAttr> {
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
  name: string;

  // @BelongsToMany(() => Role, () => UserRoles)
  // roles: Role[];
}
