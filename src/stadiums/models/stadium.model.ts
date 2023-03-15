import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';
import { Region } from '../../region/models/region.model';
import { Category } from '../../categories/models/category.model';
import { District } from '../../district/models/district.model';

interface StadiumAttr {
  category_id: number;
  owner_id: number;
  contactWith: string;
  name: string;
  volume: number;
  address: string;
  region_id: number;
  district: number;
  location: string;
  buildAt: Date;
  startTime: string;
  endTime: string;
}

@Table({ tableName: 'stadiums' })
export class Stadium extends Model<Stadium, StadiumAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  contact_with: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  volume: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.DATE,
  })
  buildAt: Date;

  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @Column({
    type: DataType.STRING,
  })
  end_time: string;

  // CATEGORY
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
  })
  category_id: number;
  @BelongsTo(() => Category)
  category: Category[];

  // USER
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;
  @BelongsTo(() => User)
  user: User[];

  // REGION
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;
  @BelongsTo(() => Region)
  region: Region[];

  // DISTRICT
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;
  @BelongsTo(() => District)
  district: District[];

  // @HasMany(() => Stadium)
  // stadium: Stadium[];
}
