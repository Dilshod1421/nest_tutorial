import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({ example: 'Futbol' })
  readonly name?: string;

  @ApiProperty({ example: '1' })
  readonly parentId?: number;
}
