import { ApiProperty } from '@nestjs/swagger';

export class UpdateComfortDto {
  @ApiProperty({ example: 'Yaxshi' })
  readonly name?: string;
}
