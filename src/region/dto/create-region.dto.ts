import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({ example: 'Andijon' })
  @IsNotEmpty()
  readonly name: string;
}
