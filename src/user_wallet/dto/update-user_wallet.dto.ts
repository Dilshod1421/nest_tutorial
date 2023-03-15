import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserWalletDto {
  @ApiProperty({ example: '19000' })
  readonly wallet?: number;
}
