import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @ApiProperty({ example: 'johndoe' })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ example: 'Uzb@k!$t0n' })
  @IsNotEmpty()
  @IsStrongPassword()
  readonly password: string;

  @ApiProperty({ example: 'Uzb@k!$t0n' })
  @IsNotEmpty()
  readonly confirm_password: string;

  @ApiProperty({ example: '@johndoe' })
  readonly telegram_link: string;

  @ApiProperty({ example: 'john@gmail.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ example: '+998887028030' })
  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phone: string;

  @ApiProperty({ example: '2023-03-14' })
  @IsNotEmpty()
  readonly birthday: string;
}
