import {HttpSuccess} from '../decorators/http.decorators'
export class SuccessInterceptor{
    constructor(options){
        const {ctx,status,data} =options;
        this.init(ctx,status,data);
    }
    /**
     * 错误拦截器
     * @param {*} status 
     * 
     */
    init(ctx,status,data){
        ctx.response.body=HttpSuccess('请求成功',status,data || {});
    }
};

