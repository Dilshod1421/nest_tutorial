import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Region } from '../../region/models/region.model';
import { Stadium } from '../../stadiums/models/stadium.model';

interface DistrictAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: 'district' })
export class District extends Model<District, DistrictAttr> {
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

  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @BelongsTo(() => Region)
  region: Region[];

  @HasMany(() => Stadium)
  stadium: Stadium[];
}
