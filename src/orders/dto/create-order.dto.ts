import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateOrderDto {
    @ApiProperty({example: '1', description: "foydalanuvchi ID si"})
    @IsNotEmpty()
    @IsInt()
    user_id: number;
    @ApiProperty({example: '1', description: "foydalanuvchi Wallet(hamyon) ID si"})
    @IsNotEmpty()
    @IsInt()
    user_wallet_id: number;
    @ApiProperty({example: '1', description: "stadion vaqtlar ID si"})
    @IsNotEmpty()
    @IsInt()
    st_time_id: number;

    @ApiProperty({example: '2023-03-15T15:00', description: "belgilanga vaqt va kuni"})
    @IsNotEmpty()
    @IsDate()
    date: Date;

    @ApiProperty({example: '2023-03-15T15:00', description: "yaratilgan vaqti"})
    @IsDate()
    createdAt?: Date;

    @ApiProperty({example: 'paid', description: "buyurtmaning status ID si"})
    @IsNotEmpty()
    @IsInt()
    status_id: number;
}
