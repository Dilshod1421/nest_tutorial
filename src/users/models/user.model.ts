import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne } from "sequelize-typescript";
import { Comment } from "../../comments/models/comment.model";
import { Stadium } from "../../stadiums/models/stadium.model";
import { UserCard } from "../../user_cards/models/user_card.model";
import { UserWallet } from "../../user_wallet/models/user_wallet.model";
import { Order } from "../../orders/models/order.model";

interface UserAttr {
    first_name: string;
    last_name: string;
    username: string;
    hashed_password: string;
    telegram_link: string;
    email: string;
    phone: string;
    birthday: Date;
    // user_photo: string;
    is_owner: boolean;
    is_active: boolean;
    hashed_refresh_token: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserAttr>{

    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
        // allowNull: false,
    })
    first_name: string;

    @Column({
        type:DataType.STRING,
    })
    last_name: string;

    @Column({
        type:DataType.STRING,
        // allowNull: false
    })
    username: string;

    @Column({
        type:DataType.STRING,
    })
    hashed_password: string;

    @Column({
        type:DataType.STRING,
    })
    hashed_refresh_token: string;

    @Column({
        type:DataType.STRING,
    })
    telegram_link: string;

    @Column({
        type:DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string;

    @Column({
        type:DataType.STRING,
        // allowNull: false
    })
    phone: string;

    // @Column({
    //     type:DataType.STRING,
    // })
    // user_photo: string;

    @Column({
        type:DataType.DATE,
        // allowNull:false
    })
    birthday: Date;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_owner: boolean;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean;

    @Column({
        type:DataType.STRING
    })
    activation_link: string;

    @HasMany(()=>UserCard)
    cards: UserCard;

    
    @HasOne(()=>UserWallet)
    wallet: UserWallet
    
    @HasMany(()=>Stadium)
    stadiums: Stadium[];

    @HasMany(()=>Comment)
    comments: Stadium[];

    @HasMany(()=>Order)
    orders: Order[];

}
