import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import {JwtModule} from '@nestjs/jwt'
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    forwardRef(()=> UsersModule),
    forwardRef(()=> FilesModule),
    JwtModule.register({
      secret: 'MySecretKey',
      signOptions: {
        expiresIn: '24h'
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtModule],
  exports:[AuthModule, JwtModule]
})
export class AuthModule {}
