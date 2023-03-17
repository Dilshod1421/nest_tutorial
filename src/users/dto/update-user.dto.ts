import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    first_name?: string;
    last_name?: string;
    username?: string;
    password?: string;
    confirm_password?: string;
    email?: string;
    phone?: string;
    birthday?: Date;
}
