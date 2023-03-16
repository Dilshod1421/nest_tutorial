import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Stadium } from "../../stadiums/models/stadium.model";
import { User } from "../../users/models/user.model";

interface CommentAttr{
    impression: string;
    user_id: number;
    stadium_id: number;
}

@Table({tableName: "comments"})
export class Comment extends Model<Comment, CommentAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Stadium)
    @Column({
        type: DataType.INTEGER
    })
    stadium_id: number;

    @ForeignKey(()=> User)
    @Column({
        type: DataType.INTEGER
    })
    user_id: number;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    impression: string;

    
    @BelongsTo(()=> Stadium)
    stadium: Stadium;

    @BelongsTo(()=> User)
    user: User;
}
