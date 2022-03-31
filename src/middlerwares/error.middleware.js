import { LoggerInterceptor } from '../interceptor/logger.interceptor';
import {ErrorInterceptor} from '../interceptor/error.interceptor'

export class ErrorMiddleware{
    static error(logger){
        return async (ctx,next)=>{
            try{
                // 请求之前用户的数据
                await next();
                new ErrorInterceptor(ctx);
            }catch(error){
                new LoggerInterceptor(ctx,logger,error);
            }
        }
    }
}