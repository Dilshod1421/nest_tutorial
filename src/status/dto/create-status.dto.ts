import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString} from "class-validator";

export class CreateStatusDto {
    @ApiProperty({example: 'paid', description: "statusni nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
