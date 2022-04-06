import { ErrorInterceptor } from "./error.interceptor";
import { SuccessInterceptor } from "./success.interceptor";
/**
 * 请求拦截器
 */
export class HttpInterceptor{
    constructor(ctx){
        const status =ctx.response.status;
        const data = ctx.body;
        this.init(status,ctx,data);
    }
    /**
     * 错误拦截器
     * @param {*} status 
     * 
     */
    init(status,ctx,data){
        if(status !== 200){
            new ErrorInterceptor({ctx,status});
        }else{
            new SuccessInterceptor({ctx,status,data});
        }
    }
};

