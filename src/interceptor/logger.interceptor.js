import { message } from 'koa/lib/response';
import {HTTP_CUSTOM_TEXT_DEFAULT} from '../const/http';
import {HttpCustomError} from '../errors/custom.error';
export class LoggerInterceptor{
    constructor(ctx,logger,error){
        this.loggerGlobal =logger.loggerGlobal;
        this.init(ctx,error)
    }
    init(ctx,error){
        this.loggerGlobal.error(error);
    }
};

