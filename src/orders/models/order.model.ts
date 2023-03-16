import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { UserWallet } from "../../user_wallet/models/user_wallet.model";
import { StadiumTime } from "../../stadium_times/models/stadium_time.model";
import { Status } from "../../status/models/status.model";

interface OrderAttr{
    user_id: number;
    user_wallet_id: number;
    st_time_id: number;
    date: Date;
    createdAt?: Date;
    status_id: number;
}


@Table({tableName: 'orders', createdAt: false, updatedAt:false})
export class Order extends Model<Order, OrderAttr> {
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> User)
    @Column({
        type: DataType.INTEGER
    })
    user_id: number;

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
        allowNull:false
    })
    date: Date;

    @Column({
        type:DataType.DATE,
        defaultValue: Date.now(),
    })
    createdAt: Date;

    @ForeignKey(()=> Status)
    @Column({
        type: DataType.INTEGER
    })
    status_id: number;

    @BelongsTo(()=> Status)
    status: Status;
    
    @BelongsTo(()=> StadiumTime)
    stadium_times: StadiumTime;
    
    @BelongsTo(()=> UserWallet)
    user_wallet: UserWallet;

    @BelongsTo(()=> User)
    user: User;
    
}
