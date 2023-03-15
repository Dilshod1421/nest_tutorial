import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'John' })
  readonly first_name?: string;

  @ApiProperty({ example: 'Doe' })
  readonly last_name?: string;

  @ApiProperty({ example: 'johndoe' })
  readonly username?: string;

  @ApiProperty({ example: 'Uzb@k!$t0n' })
  readonly hashed_password?: string;

  @ApiProperty({ example: 'john@gmail.com' })
  readonly email?: string;

  @ApiProperty({ example: '+998887028030' })
  readonly phone?: string;

  @ApiProperty({ example: '2023-03-14' })
  readonly birthday?: string;

  @ApiProperty({ example: 'jldskfjl32412' })
  readonly hashed_refresh_token?: string;

  @ApiProperty({ example: 'Link Activation' })
  readonly activation_link?: string;
}
