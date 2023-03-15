import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateRegionDto {
  @ApiProperty({ example: 'Toshkent' })
  @IsNotEmpty()
  readonly name: string;
}
