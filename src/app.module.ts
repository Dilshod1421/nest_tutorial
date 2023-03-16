import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize'
import { CategoriesModule } from './categories/categories.module';
import { ComfortModule } from './comfort/comfort.module';
import { Category } from './categories/models/category.model';
import { UsersModule } from './users/users.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { UserWalletModule } from './user_wallet/user_wallet.module';
import { StadiumsModule } from './stadiums/stadiums.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { Stadium } from './stadiums/models/stadium.model';
import { User } from './users/models/user.model';
import { Region } from './region/models/region.model';
import { District } from './district/models/district.model';
import { Comfort } from './comfort/models/comfort.model';
import { UserCard } from './user_cards/models/user_card.model';
import { UserWallet } from './user_wallet/models/user_wallet.model';
import { ComfortStadium } from './stadiums/models/stadium-comfort.model';
import { MediaModule } from './media/media.module';
import { Media } from './media/models/media.model';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/models/comment.model';
import { StadiumTimesModule } from './stadium_times/stadium_times.module';
import { StadiumTime } from './stadium_times/models/stadium_time.model';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { StatusModule } from './status/status.module';
import { OrdersModule } from './orders/orders.module';
import { Cart } from './cart/models/cart.model';
import { Status } from './status/models/status.model';
import { Admin } from './admin/models/admin.model';
import { Order } from './orders/models/order.model';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { MailModule } from './mail/mail.module';


@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
        ServeStaticModule.forRoot({
            rootPath: resolve(__dirname, 'static')
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [
                Category,
                Stadium,
                User,
                Region,
                District,
                Comfort,
                UserCard,
                UserWallet,
                ComfortStadium,
                Media,
                Comment,
                StadiumTime,
                Cart,
                Status,
                Admin,
                Order
            ],
            autoLoadModels: true,
            logging: true
        }),
        CategoriesModule,
        ComfortModule,
        UsersModule,
        UserCardsModule,
        UserWalletModule,
        StadiumsModule,
        RegionModule,
        DistrictModule,
        MediaModule,
        CommentsModule,
        StadiumTimesModule,
        CartModule,
        AdminModule,
        StatusModule,
        OrdersModule,
        AuthModule,
        MailModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule { }
