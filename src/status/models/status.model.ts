import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { Order } from "../../orders/models/order.model";

interface StatusAttr{
    name: string;
}

@Table({tableName: 'status'})
export class Status extends Model<Status, StatusAttr>{
    
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

    @HasMany(()=>Cart)
    carts: Cart[]; 

    @HasMany(()=>Order)
    orders: Order[]; 
}
