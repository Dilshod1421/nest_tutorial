import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateDistrictDto {
    @ApiProperty({example: '1', description: "region(shahar) ID si"})
    @IsNotEmpty()
    @IsInt()
    region_id: number;

    @ApiProperty({example: 'Yunusobod', description: "tuman nomi si"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
