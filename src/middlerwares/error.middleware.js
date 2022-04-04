import { LoggerInterceptor } from '../interceptor/logger.interceptor';
import {HttpInterceptor} from '../interceptor/http.interceptor';
import { HttpCustomError } from '../errors/custom.error';
export class ErrorMiddleware{
    static error(logger){
        return async (ctx,next)=>{
            try{
                // 请求之前拦截
                await next();
                // 请求之后拦截
                new HttpInterceptor(ctx);
            }catch(error){
                new HttpCustomError(ctx);
                new LoggerInterceptor(ctx,logger,error);
            }
        }
    }
}