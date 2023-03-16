import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString} from "class-validator";

export class CreateRegionDto {
    @ApiProperty({example: 'Toshkent', description: "Stadion joylashgan shahar"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
