import { BaseContext } from "koa";



export default class LoginController {


    public static async helloWorld(ctx: BaseContext): Promise<void> {
        ctx.body = "Hello World!";
    }

}