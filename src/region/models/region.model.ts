import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { District } from '../../district/models/district.model';
import { Stadium } from '../../stadiums/models/stadium.model';

interface RegionAttr {
  name: string;
}

@Table({ tableName: 'regions' })
export class Region extends Model<Region, RegionAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @HasMany(() => District)
  district: District[];

  @HasMany(() => Stadium)
  stadium: Stadium[];
}
