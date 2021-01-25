
import { isUUID, IsUUID } from "class-validator";
import { Model,DataType,Table,Column, PrimaryKey, Default, AllowNull, ForeignKey, BelongsTo} from "sequelize-typescript"
import Company from "./Company.entity";


export interface UserCreate{
    name: string;
    username: string;
    password: string;

}

export interface AssignUser{

    companyId: string;
}

export interface UserFetch{
    name:string;
    username: string;
    companyId: string;
    company: Company;

}

@Table
export default class User extends Model<UserCreate>{




@Default(DataType.UUIDV4)
@IsUUID(4)
@AllowNull(false)
@PrimaryKey
@Column({
    type:DataType.UUID,
})
uuid: string;

@Column
name: string;

@Column
username: string;

@Column
password: string;

@ForeignKey(()=> Company) 
@Column({
    type: DataType.UUID,
})
companyId: string;


@BelongsTo(()=> Company )
company : Company;

}

