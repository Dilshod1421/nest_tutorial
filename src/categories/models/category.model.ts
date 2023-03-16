import {Column, Table, DataType, Model, BelongsToMany, ForeignKey, BelongsTo, HasMany} from "sequelize-typescript"
import { Stadium } from "../../stadiums/models/stadium.model";


interface CategoryAttr{
    name: string;
}


@Table({tableName: 'category', createdAt:false, updatedAt: false})
export class Category extends Model<Category, CategoryAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Category)
    @Column({
        type:DataType.INTEGER,
        defaultValue: null
    })
    parent_id: number;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string;

    @HasMany(()=> Category)
    subCategories: Category;

    @HasMany(()=> Stadium)
    stadiums: Stadium[]

    

}
