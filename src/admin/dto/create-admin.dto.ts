import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateAdminDto {
    @ApiProperty({example: 'admin', description: "admin ismi"})
    @IsNotEmpty()
    @IsString()
    username: string;
    @ApiProperty({example: 'admin@mail.uz', description: "admin emaili"})
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({example: 'telegram link', description: "admin telgram linki"})
    @IsString()
    telegram_link?: string;

    @ApiProperty({example: 'pa$$word1234', description: "admin paroli"})
    @IsNotEmpty()
    @IsString()
    hashed_password: string;

    @ApiProperty({example: '+998991112233', description: "admin tel raqami"})
    @IsNotEmpty()
    @IsString()
    phone: string;
}
