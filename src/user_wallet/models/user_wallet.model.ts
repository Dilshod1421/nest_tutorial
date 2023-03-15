import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';
import { Cart } from '../../cart/models/cart.model';
import { Order } from '../../orders/models/order.model';

interface UserWalletAttr {
  userId: number;
  wallet: number;
}

@Table({ tableName: 'user-wallet' })
export class UserWallet extends Model<UserWallet, UserWalletAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  wallet: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Cart)
  cart: Cart[];

  @HasMany(() => Order)
  order: Order[];
}
