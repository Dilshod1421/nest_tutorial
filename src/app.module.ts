import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/models/user.model';
import { ConfigModule } from '@nestjs/config';
import { ComfortModule } from './comfort/comfort.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { CategoriesModule } from './categories/categories.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { ComfortStadiumModule } from './comfort_stadium/comfort_stadium.module';
import { MediaModule } from './media/media.module';
import { CommentsModule } from './comments/comments.module';
import { AdminModule } from './admin/admin.module';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { StatusModule } from './status/status.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { UserWallet } from './user_wallet/models/user_wallet.model';
import { Comfort } from './comfort/models/comfort.model';
import { Region } from './region/models/region.model';
import { District } from './district/models/district.model';
import { Category } from './categories/models/category.model';
import { UserCard } from './user_cards/models/user_card.model';
import { Stadium } from './stadiums/models/stadium.model';
import { ComfortStadium } from './comfort_stadium/models/comfort_stadium.model';
import { Media } from './media/models/media.model';
import { Comments } from './comments/models/comment.model';
import { Admin } from './admin/models/admin.model';
import { StadiumTimes } from './stadium_times/models/stadium_time.model';
import { Status } from './status/models/status.model';
import { Cart } from './cart/models/cart.model';
import { Order } from './orders/models/order.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        User,
        UserWallet,
        Comfort,
        Region,
        District,
        Category,
        UserCard,
        Stadium,
        ComfortStadium,
        Media,
        Comments,
        Admin,
        StadiumTimes,
        Status,
        Cart,
        Order,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    UsersModule,
    UserWalletModule,
    ComfortModule,
    RegionModule,
    DistrictModule,
    CategoriesModule,
    UserCardsModule,
    StadiumsModule,
    ComfortStadiumModule,
    MediaModule,
    CommentsModule,
    AdminModule,
    StadiumTimesModule,
    StatusModule,
    CartModule,
    OrdersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
