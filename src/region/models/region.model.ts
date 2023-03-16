import { bufferWhen } from "rxjs";
import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Stadium } from "../../stadiums/models/stadium.model";

interface RegionAttr {
    name: string;
}

@Table({tableName: 'region'})
export class Region extends Model<Region, RegionAttr>{
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

    @HasMany(()=> District)
    districts: District[]

    @HasMany(()=> Stadium)
    stadiums: Stadium[]
    
}
