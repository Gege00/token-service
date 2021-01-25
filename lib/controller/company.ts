import {Controller, Ctx, Req, Body, Get, Post, Delete, Query, Flow, Params, Version} from 'koa-ts-controllers';

import Company,{CompanyCreate} from '../entity/Company.entity'


@Controller("/company")
export class CompanyController{


    @Get('/')
    async getAllCompany():Promise<Company[]>{

        return Company.findAll();

    }

    @Post("/")
    async addCompany(@Body() body:CompanyCreate):Promise<Company>{

        const company = new Company({name: "Company1"})
        return await company.save();

    }


}