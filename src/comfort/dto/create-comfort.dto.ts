import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateComfortDto {
  @ApiProperty({ example: 'Yaxshi' })
  @IsNotEmpty()
  readonly name: string;
}
