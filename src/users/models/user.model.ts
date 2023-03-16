import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { UserWallet } from '../../user_wallet/models/user_wallet.model';
import { Stadium } from '../../stadiums/models/stadium.model';
import { UserCard } from '../../user_cards/models/user_card.model';
import { Comments } from '../../comments/models/comment.model';

interface UserAttr {
  first_name: string;
  last_name: string;
  username: string;
  hashed_password: string;
  telegram_link: string;
  email: string;
  phone: string;
  activation_link: string;
  user_photo: string;
  birthday: string;
  hashed_refresh_token: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  last_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  hashed_password: string;

  @Column({ type: DataType.STRING })
  telegram_link: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone: string;

  @Column({ type: DataType.STRING })
  user_photo: string;

  @Column({ type: DataType.STRING })
  birthday: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_owner: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_active: boolean;

  @Column({ type: DataType.STRING })
  hashed_refresh_token: string;

  @Column({ type: DataType.STRING })
  activation_link: string;

  @HasMany(() => Stadium)
  stadium: Stadium[];

  @HasMany(() => UserWallet)
  userWallet: UserWallet[];

  @HasMany(() => UserCard)
  userCard: UserCard[];

  @HasMany(() => Comments)
  comments: Comments[];
}
