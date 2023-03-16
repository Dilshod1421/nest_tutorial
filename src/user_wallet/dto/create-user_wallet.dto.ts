import { ApiProperty } from "@nestjs/swagger";

export class CreateUserWalletDto {
        
    @ApiProperty({example: '1', description: "foydalanuvchi id si"})
        user_id: number;

    @ApiProperty({example: '1234', description: "foydalanuvchi walleti"})
        wallet: number;
}
