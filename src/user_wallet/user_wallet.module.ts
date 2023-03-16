import { Module } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { UserWalletController } from './user_wallet.controller';
import { UserWallet } from './models/user_wallet.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports:[SequelizeModule.forFeature([UserWallet]), AuthModule],
  controllers: [UserWalletController],
  providers: [UserWalletService]
})
export class UserWalletModule {}
