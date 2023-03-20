import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from '../files/files.module';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';
import { OtpModule } from 'src/otp/otp.module';
import { Otp } from 'src/otp/models/otp.model';
import { BotModule } from 'src/bot/bot.module';

@Module({
  imports: [SequelizeModule.forFeature([User, Otp]),
    FilesModule,
    MailModule,
    OtpModule,
    BotModule,
  JwtModule.register({
    secret: 'MySecretKey',
    signOptions: {
      expiresIn: '24h'
    },
  })
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
