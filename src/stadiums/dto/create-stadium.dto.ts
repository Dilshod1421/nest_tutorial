import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDate, IsEmail, IsStrongPassword , isPhoneNumber, IsDateString, IsInt} from "class-validator";

export class CreateStadiumDto {
    @ApiProperty({example: '1', description: "stadion categoriyasi ID si"})
    @IsNotEmpty()
    @IsInt()
    category_id: number;

    @ApiProperty({example: '1', description: "stadion categoriyasi ID si"})
    @IsNotEmpty()
    @IsInt()
    owner_id: number;

    @ApiProperty({example: '+998901112233', description: "stadion telefon raqami"})
    @IsNotEmpty()
    @IsString()
    contact_with: string;

    @ApiProperty({example: 'Bunyodkor', description: "stadion nomi"})
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({example: '40000', description: "stadion sig'imi"})
    @IsNotEmpty()
    @IsString()
    volume: string;

    @ApiProperty({example: 'Bunyodkor shox kucha 22', description: "stadion manzili"})
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({example: '1', description: "region ID si"})
    @IsNotEmpty()
    @IsInt()
    region_id: number;

    @ApiProperty({example: '1', description: "shaxar(district) ID si"})
    @IsNotEmpty()
    @IsInt()
    district_id: number;

    @ApiProperty({example: "12.12312312/64.21231231", description: "coordinatsiyalr lat/lon ko'rinishida kiritiladi"})
    @IsNotEmpty()
    @IsString()
    location: string;

    @ApiProperty({example: "2020-10-20", description: "qurilgan sanasi"})
    @IsString()
    build_at?: Date;

    @ApiProperty({example: "8:00", description: "ishlash boshlanish vaqti"})
    @IsNotEmpty()
    @IsString()
    start_time: string;

    @ApiProperty({example: "22:00", description: "ishlash tugash vaqti"})
    @IsNotEmpty()
    @IsString()
    end_time: string;
}
