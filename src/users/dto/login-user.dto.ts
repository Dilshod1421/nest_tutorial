import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";


export class LoginUserDto {

    @ApiProperty({example: 'email@mail.uz', description: "foydalanuvchi emaili"})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiProperty({example: 'Pa$$word1234', description: "parol"})
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}