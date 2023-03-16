import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey } from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
import { Stadium } from "../../stadiums/models/stadium.model";

interface DistrictAttr {
    name: string;
    region_id: number;
}

@Table({tableName: "district"})
export class District extends Model<District, DistrictAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    name: string;

    @ForeignKey(()=> Region)
    @Column({
        type:DataType.INTEGER
    })
    region_id: number;

    @BelongsTo(()=> Region)
    region: Region;

    @HasMany(()=> Stadium)
    stadiums: Stadium;
}
