import {HTTP_CUSTOM_TEXT_DEFAULT} from '../const/http';
/**
 * 日志拦截器
 */
export class LoggerInterceptor{
    constructor(logger,error){
        this.loggerGlobal =logger.loggerGlobal;
        this.init(error)
    }
    init(error){
        this.loggerGlobal.error(error);
    }
};

