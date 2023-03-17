import { Module } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { UserWalletController } from './user_wallet.controller';
import { UserWallet } from './models/user_wallet.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([UserWallet]), UsersModule],
  controllers: [UserWalletController],
  providers: [UserWalletService],
  exports: [UserWalletService]
})
export class UserWalletModule { }
