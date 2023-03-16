import { Column, DataType, Table, Model, BelongsTo, HasMany, HasOne } from "sequelize-typescript";

interface AdminAttr {
   
    username: string;
    email: string;
    telegram_link?: string;
    admin_photo: string;
    hashed_password: string;
    phone: string;
    birthday: Date;
}

@Table({tableName: 'admin'})
export class Admin extends Model<Admin, AdminAttr>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    username: string;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    hashed_password: string;

    @Column({
        type:DataType.STRING,
    })
    telegram_link: string;

    @Column({
        type:DataType.STRING,
        allowNull: false,
        unique:true
    })
    email: string;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    phone: string;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    admin_photo: string;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    is_creater: boolean;

    @Column({
        type:DataType.BOOLEAN,
        defaultValue: true
    })
    is_active: boolean;
}



