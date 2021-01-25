import {Controller, Ctx, Req, Body, Get, Post, Delete, Query, Flow, Params, Version} from 'koa-ts-controllers';


// import {authMiddleware, aMiddleware, bMiddleware} from './yourMiddlewares'

import User, { AssignUser, UserCreate, UserFetch } from '../entity/User.entity'



@Controller('/users')
export class UserController{



    @Get('/')
    async getAllUsers():Promise<any>{

        return User.findAll()
    }

    @Post('/')
    async addUser( @Body() data:any):Promise<any>{
    
    const newUser= new User({name:"Don Joe",username:'Don',password:'joe1'})
    return await newUser.save();
    }


    @Post('/:id')
    async updateUser(@Params('id') id: string, @Body() body:UserCreate): Promise<any>{

        return "WRONG"

    }
    @Post('/:id')
    async assignUserToCompany( @Params('id') id: string, @Body() body:AssignUser): Promise<User>{

        const user= await User.findByPk(id);
        
        user.companyId= id;

        await user.save()

        return user;

        

        
    }

    

}