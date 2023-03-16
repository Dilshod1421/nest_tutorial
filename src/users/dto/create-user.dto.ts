import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsPhoneNumber} from "class-validator";


export class CreateUserDto {

    @ApiProperty({example: 'Fakhriddin', description: "foydalanuvchi Ismi"})
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @ApiProperty({example: 'Abduraimov', description: "foydalanuvchi familiyasi"})
    @IsString()
    last_name: string;

    @ApiProperty({example: 'Fakhriddin01', description: "foydalanuvchi login ismi"})
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty({example: 'pa$$worD1234', description: "foydalanuvchi paaroli"})
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @ApiProperty({example: 'pa$$worD1234', description: "foydalanuvchi paroli tasdiqlashi"})
    @IsNotEmpty()
    @IsString()
    confirm_password: string;

    @ApiProperty({example: 'example@mail.uz', description: "foydalanuvchi emaili"})
    @IsEmail()
    email: string;

    @ApiProperty({example: '+998991112233', description: "foydalanuvchi telefon raqami"})
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @ApiProperty({example: '1989-06-02', description: "foydalanuvchi tug'ilgan kuni"})
    @IsNotEmpty()
    birthday: Date;
}
