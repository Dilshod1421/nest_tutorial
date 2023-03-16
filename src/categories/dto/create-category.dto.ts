import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";


export class CreateCategoryDto {
    @ApiProperty({example: 'football', description: "stadion categoriyasi"})
    @IsNotEmpty()
    @IsString()
    readonly name: string; 

    @ApiProperty({example: '1', description: "kattaroq categoriya stadionni ID si"})
    @IsInt()
    readonly parent_id?: number;
}
