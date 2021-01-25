import Koa from 'koa';
import jwt from "koa-jwt";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import cors from "@koa/cors";
import winston from "winston";
import {bootstrapControllers} from "koa-ts-controllers"


import { config } from  "./config"
import { logger } from  "./logger"
import { cron } from "./cron"

import {sequelize} from './db/sequelize'



const app = new Koa();
const router = new Router();

app.use(logger(winston));

sequelize.sync({force:true}).then(async()=>{

    await bootstrapControllers(app,{
        router: router,
        basePath: '/api',
        disableVersioning:true,
        controllers:[__dirname+'/controller/**/*.ts'],
        
    })
}).then(async ()=>{

    app.use(router.routes()).use(router.allowedMethods());
    
    cron.start()
    app.listen(config.port,()=>{
        console.log(`Server is running on port ${config.port}`);
       
    })
    
})




