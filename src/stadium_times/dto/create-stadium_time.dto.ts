import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateStadiumTimeDto {

    @ApiProperty({example: '1', description: "Stadion ID si"})
    @IsNotEmpty()
    @IsInt()
    stadium_id: number;

    @ApiProperty({example: '8:00', description: "Stadion ish boshlash vaqti"})
    @IsNotEmpty()
    @IsString()
    start_time: string;

    @ApiProperty({example: '22:00', description: "Stadion ish tugatish vaqti"})
    @IsNotEmpty()
    @IsString()
    end_time: string;

    @ApiProperty({example: '100000', description: "Stadion narxi/soat"})
    @IsNotEmpty()
    @IsInt()
    price: number;
}
