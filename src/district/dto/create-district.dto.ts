import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateDistrictDto {
  @ApiProperty({ example: 'Chilonzor' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly regionId: number;
}
