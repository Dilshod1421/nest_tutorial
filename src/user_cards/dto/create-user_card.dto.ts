import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateUserCardDto {

    @ApiProperty({example: '1', description: "foydalanuvchi ID si"})
    @IsNotEmpty()
    @IsInt()
    user_id: number;

    @ApiProperty({example: 'Fakhriddin', description: "foydalanuvchi ismi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '+998901112233', description: "foydalanuvchi telefon raqami"})
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty({example: '8600 1234 5678 9000', description: "foydalanuvchi kartasi raqami"})
    @IsNotEmpty()
    @IsString()
    number: string;

    @ApiProperty({example: '""2024""', description: "foydalanuvchi kartasi amal qilish yili"})
    @IsNotEmpty()
    @IsInt()
    year: number;

    @ApiProperty({example: '03', description: "foydalanuvchi kartasi amal qilish oyi"})
    @IsNotEmpty()
    @IsInt()
    month: number;
    
    is_active?: boolean;
    is_main?: boolean;

}
