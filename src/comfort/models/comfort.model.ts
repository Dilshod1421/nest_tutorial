import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ComfortStadium } from "../../stadiums/models/stadium-comfort.model";

interface ComfortAttr {
    name: string;
}

@Table({tableName: "comfort", updatedAt:false, createdAt:false})
export class Comfort extends Model<Comfort, ComfortAttr>{

    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string;

    @HasMany(()=> ComfortStadium)
    comfort_stadiums: ComfortStadium


}
