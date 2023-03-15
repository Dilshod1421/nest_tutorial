import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'john@gmail.com' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'Uzb@k!$t0n' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
