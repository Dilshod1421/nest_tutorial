import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserCardDto {
  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly userId: number;

  @ApiProperty({ example: 'Uzcard' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '+998807018023' })
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty({ example: '+990901290391' })
  @IsNotEmpty()
  readonly number: string;

  @ApiProperty({ example: 17 })
  @IsNotEmpty()
  readonly year: number;

  @ApiProperty({ example: 7 })
  @IsNotEmpty()
  readonly month: number;
}
