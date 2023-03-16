import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class AddComfortDto {
     @ApiProperty({example: '1', description: "qulaylik ID si"})
     @IsNotEmpty()
     @IsInt()
     comfort_id: number;

     @ApiProperty({example: '1', description: "stadion ID si"})
     @IsNotEmpty()
     @IsInt()
     stadium_id: number;
}