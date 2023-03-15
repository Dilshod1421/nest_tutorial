import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface CategoriesAttr {
  name: string;
  parentId: number;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoriesAttr> {
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

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
  })
  parentId: number;

  @BelongsTo(() => Category)
  parentCategory: Category;

  // @HasMany(() => Stadiums)
  // userWallet: Stadiums[];
}
