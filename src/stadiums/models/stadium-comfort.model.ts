import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey, AllowNull, BelongsToMany } from "sequelize-typescript";
import { Stadium } from "./stadium.model";
import { Comfort } from "../../comfort/models/comfort.model";

@Table({tableName: "comfort_stadium", createdAt: false, updatedAt: false})
export class ComfortStadium extends Model<ComfortStadium>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Stadium)
    @Column({
        type:DataType.INTEGER
    })
    stadium_id: number;

    @ForeignKey(()=> Comfort)
    @Column({
        type:DataType.INTEGER
    })
    comfort_id: number;

    // @BelongsToMany(()=> Comfort, ()=> ComfortStadium)
    // comforts: Comfort[];
    
}