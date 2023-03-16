import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import { FilesModule } from '../files/files.module';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';

@Module({
  imports:[SequelizeModule.forFeature([User]), FilesModule, MailModule,
  forwardRef(() => AuthModule), JwtModule.register({
    secret: 'MySecretKey',
      signOptions: {
        expiresIn: '24h'
      },
  })],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
