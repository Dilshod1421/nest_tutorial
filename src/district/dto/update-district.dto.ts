import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateDistrictDto {
  @ApiProperty({ example: 'Chilonzor' })
  readonly name?: string;

  @ApiProperty({ example: '1' })
  readonly regionId?: number;
}
