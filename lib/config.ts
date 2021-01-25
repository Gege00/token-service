import dotenv from "dotenv"

dotenv.config({path: ".env"})

export interface Config{
    port: number;
    jwtSecret: string;
    dbUrl: string;
    mssql_connection: string;
    dbUser: string;
    dbPassword:string;
    dbEntitiesPath: string[];
    cronJobExpression: string;
    debugLogging: boolean;

}

const devMode = process.env.NODE_ENV=="development";

const config: Config = {

    port: +(process.env.PORT|| 3003 ),
    jwtSecret: process.env.JWT_SECRET || "super_secret",
    dbUrl: process.env.DATABASE_URL || "mssql://localhost,1433",
    dbUser : process.env.DATABASE_USER,
    dbPassword: process.env.DATABASE_PWD,
    mssql_connection: process.env.MSSQLCONNECTIONSTR,
    dbEntitiesPath: [
        ... devMode ? ["src/entity/**/*.ts"] : ["dist/entity/**/*.js"],
      ],
    cronJobExpression: "0 * * * *",
    debugLogging: devMode

}

export { config };