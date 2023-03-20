import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface OtpAttr {
    id: string;
    otp: string;
    expiration_time: Date;
    verified: boolean;
    check: string;
}

@Table({ tableName: "otp" })
export class Otp extends Model<Otp, OtpAttr> {
    @ApiProperty({ example: "1434j5h3214432kl" })
    @Column({ type: DataType.UUID, primaryKey: true, allowNull: false })
    id: string;

    @ApiProperty({ example: "2000" })
    @Column({ type: DataType.STRING, allowNull: false })
    otp: string;

    @ApiProperty({ example: "2023-02-11" })
    @Column({ type: DataType.DATE, allowNull: false })
    expiration_time: Date;

    @ApiProperty({ example: false })
    @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: false, })
    verified: boolean;

    @ApiProperty({ example: "998901234567" })
    @Column({ type: DataType.STRING, allowNull: false })
    check: string;
}