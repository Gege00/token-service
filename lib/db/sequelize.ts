import { Sequelize } from "sequelize-typescript"
import { config } from  "../config"



export const sequelize = new Sequelize(
 config.dbUrl,
 {  
    database: "dev_db",
    dialect: "mssql",
    dialectOptions:{
        connectionString: config.mssql_connection
    },
    storage: ':memory:',
    models: [`${__dirname}/../entity/**/*.ts`],
    modelMatch:(filename,member)=>{

               const substr=filename.substring(0,filename.indexOf('.entity'));
               return  substr==member.toLowerCase();
    }
    
  }
);
