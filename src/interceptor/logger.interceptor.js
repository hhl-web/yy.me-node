import {HTTP_CUSTOM_TEXT_DEFAULT} from '../const/http';
import {HttpCustomError} from '../errors/custom.error';
export class LoggerInterceptor{
    constructor(ctx,logger,error){
        this.init(ctx,logger,error)
    }
    init(ctx,logger,error){
        logger.error(error.message);
        new HttpCustomError(ctx);
    }
};

