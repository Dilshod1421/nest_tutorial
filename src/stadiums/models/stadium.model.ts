import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne, ForeignKey, AllowNull, BelongsToMany } from "sequelize-typescript";
import { Category } from "../../categories/models/category.model";
import { Comfort } from "../../comfort/models/comfort.model";
import { District } from "../../district/models/district.model";
import { Region } from "../../region/models/region.model";
import { User } from "../../users/models/user.model";
import { ComfortStadium } from "./stadium-comfort.model";
import { Media } from "../../media/models/media.model";
import { Comment } from "../../comments/models/comment.model";
import { StadiumTime } from "../../stadium_times/models/stadium_time.model";

interface StadiumAttr {
    category_id: number;
    owner_id: number;
    contact_with: string;
    name: string;
    volume: string;
    address: string;
    region_id: number;
    district_id: number;
    location: string;
    build_at?: Date;
    start_time: string;
    end_time: string;
}

@Table({tableName: 'stadiums'})
export class Stadium extends Model<Stadium, StadiumAttr>{
    
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Category)
    @Column({
        type:DataType.INTEGER
    })
    category_id: number;


    @ForeignKey(()=> User)
    @Column({
        type:DataType.INTEGER
    })
    owner_id: number;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    contact_with: string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name: string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    volume: string;

    
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    address: string;

    @ForeignKey(()=> Region)
    @Column({
        type:DataType.INTEGER
    })
    region_id: number;

    @ForeignKey(()=> District)
    @Column({
        type:DataType.INTEGER
    })
    district_id: number;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    location: string;

    @Column({
        type:DataType.DATE,
        defaultValue: Date.now()
    })
    buildAt: Date;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    start_time: string;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    end_time: string;

    @BelongsTo(()=> Category)
    category: Category;

    @BelongsTo(()=> User)
    owner: User;

    @BelongsTo(()=> Region)
    region: Region;

    @BelongsTo(()=> District)
    district: District;

    @BelongsToMany(()=> Comfort, ()=> ComfortStadium)
    comforts: Comfort[];

    @HasMany(()=> Media)
    media: Media[];

    @HasMany(()=> Comment)
    comments: Comment[];

    @HasMany(()=> StadiumTime)
    stadium_times: StadiumTime[];



}
