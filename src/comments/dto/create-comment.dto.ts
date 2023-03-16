import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateCommentDto {
    @ApiProperty({example: '1', description: "Stadion ID si"})
    @IsNotEmpty()
    @IsInt()
    stadium_id: number;
    @ApiProperty({example: '1', description: "foydalanuvchi ID si"})
    @IsNotEmpty()
    @IsInt()
    user_id: number;

    @ApiProperty({example: 'yaxshi', description: "Stadion haqida ta'surotlari"})
    @IsNotEmpty()
    @IsString()
    impression: string;
}
