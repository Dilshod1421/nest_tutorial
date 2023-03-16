import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateCartDto {
    @ApiProperty({example: '1', description: "foydalanuvchi ID si"})
    @IsNotEmpty()
    @IsInt()
    user_id: number;
    @ApiProperty({example: '1', description: "foydalanuvchi wallet(hamyon) ID si"})
    @IsNotEmpty()
    @IsInt()
    user_wallet_id: number;
    @ApiProperty({example: '1', description: "stadion ishlash vaqtlari ID si"})
    @IsNotEmpty()
    @IsInt()
    st_times_id: number;

    @ApiProperty({example: '2022-10-15', description: "cart yaratilgan sana"})
    @IsDate()
    date?: Date;
    @ApiProperty({example: '2022-10-15', description: "cart yaratilgan sana"})
    @IsDate()
    createdAt?: Date;
    @ApiProperty({example: '30min', description: "stadion tozalashga ketadigon vaqt"})
    @IsNotEmpty()
    @IsString()
    time_for_clear: string;
    @ApiProperty({example: '1', description: "cart status ID si"})
    @IsNotEmpty()
    @IsInt()
    status_id: number;
}
