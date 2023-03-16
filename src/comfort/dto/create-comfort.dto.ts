import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateComfortDto {
    @ApiProperty({example: 'dush', description: "qulaylik nomini"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
