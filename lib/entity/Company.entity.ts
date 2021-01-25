import { IsUUID } from "class-validator";
import { cpuUsage } from "process";
import { Model,DataType,Table,Column, PrimaryKey, Default, AllowNull} from "sequelize-typescript"
import { Col } from "sequelize/types/lib/utils";

export interface CompanyCreate{
    name:string;
}



@Table
export default class Company extends Model{

    @Default(DataType.UUIDV4)
    @IsUUID(4)
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type:DataType.UUID
    })
    uuid: string;

    @Column
    name:string;

}