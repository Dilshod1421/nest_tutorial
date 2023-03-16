import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { StadiumTime } from "../../stadium_times/models/stadium_time.model";
import { UserWallet } from "../../user_wallet/models/user_wallet.model";
import { User } from "../../users/models/user.model";
import { Status } from "../../status/models/status.model";
import { UserCard } from "../../user_cards/models/user_card.model";

interface CartAttr {
    user_card_id: number;
    user_wallet_id: number;
    st_times_id: number;
    date?: Date;
    createdAt?: Date;
    time_for_clear: string;
    status_id: number;
    
}

@Table({tableName: 'cart', createdAt: false, updatedAt:false})
export class Cart extends Model<Cart, CartAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> UserCard)
    @Column({
        type: DataType.INTEGER
    })
    user_card_id: number;

    @ForeignKey(()=> UserWallet)
    @Column({
        type: DataType.INTEGER
    })
    user_wallet_id: number;

    @ForeignKey(()=> StadiumTime)
    @Column({
        type: DataType.INTEGER
    })
    st_time_id: number;

    @Column({
        type:DataType.DATE,
        defaultValue: Date.now(),
    })
    date: Date;

    @Column({
        type:DataType.DATE,
        defaultValue: Date.now(),
    })
    createdAt: Date;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    time_for_clear: string;

    @ForeignKey(()=> Status)
    @Column({
        type: DataType.INTEGER
    })
    status_id: number;

    @BelongsTo(()=> Status)
    status: Status;

    @BelongsTo(()=> UserCard)
    user_card: UserCard[];

    @BelongsTo(()=> UserWallet)
    user_wallet: UserWallet[];

    @BelongsTo(()=> StadiumTime)
    stadium_times: StadiumTime[];





}
