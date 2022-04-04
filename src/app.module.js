import Koa from 'koa';
import {ErrorMiddleware} from './middlerwares/error.middleware';
import { CorsMiddleware } from './middlerwares/cors.middleware';
import {InitController} from './controllers/index';
import log4js from 'log4js';
import {historyApiFallback} from 'koa2-connect-history-api-fallback';
import bodyParser from 'koa-bodyparser';
export class AppModule{
    constructor(option){
        this.loggerGlobal={};
    }
   static createApp(){
        const app =new Koa();
        this.LogjsModule();
        app.use(ErrorMiddleware.error({
            loggerGlobal:this.loggerGlobal,
        }));
        app.use(CorsMiddleware.cors());
        app.use(bodyParser(
            {
                extendTypes:{
                    json: ['application/x-javascript']
                }
            }
        ));
        app.use(historyApiFallback({index:'/',whiteList: ['/api','/model'] }));
        this.ConstructorModule(app);
        return app;
    }
    static ConstructorModule(app){
        InitController.init(app);
    }
    static LogjsModule(){
        log4js.configure({
            appenders: { 
                globalLog: { 
                    type: "file", 
                    filename: "./logs/error.log" 
                },
            },
            categories: { 
                default: { 
                    appenders: ["globalLog"], 
                    level: "error"
                },
            }
        })
        this.loggerGlobal= log4js.getLogger('globalLog');
    }
}
