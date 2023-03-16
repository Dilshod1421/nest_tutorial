import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateMediaDto {
    @ApiProperty({example: '1', description: "stadion ID si"})
    @IsNotEmpty()
    @IsInt()
    stadium_id: number;

    @ApiProperty({example: 'Katta fotbol stadioni', description: "stadion xaqida mediaga izoh"})
    @IsNotEmpty()
    @IsString()
    description: string;
}
