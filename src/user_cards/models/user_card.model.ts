import { Column, DataType, Table, Model, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { Cart } from "../../cart/models/cart.model";

interface UserCardAttr {
    user_id: number;
    name: string;
    phone: string;
    number: string;
    year: number;
    month: number;
    is_active?: boolean;
    is_main?: boolean;
}

@Table({tableName: 'user_cards'})
export class UserCard extends Model<UserCard, UserCardAttr> {

    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> User)
    @Column({
        type:DataType.INTEGER,
    })
    user_id: number;

    @Column({
        type:DataType.STRING
    })
    name:string;

    @Column({
        type:DataType.STRING
    })
    phone:string;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    number:string;
    
    @Column({
        type:DataType.BIGINT,
        allowNull: false
    })
    year:number;

    @Column({
        type:DataType.SMALLINT,
        allowNull: false
    })
    month:number;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_active:boolean;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_main:boolean;

    @BelongsTo(()=> User)
    user: User;

    @HasOne(()=> Cart)
    cart: Cart;

}
