import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserWalletDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly userId: number;

  @ApiProperty({ example: '12000' })
  @IsNotEmpty()
  readonly wallet: number;
}
