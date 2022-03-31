import {HttpBadRequestError} from '../errors/bad-request.error';
import { HttpCustomError } from '../errors/custom.error';
export class ErrorInterceptor{
    constructor(ctx){
        const status =ctx.response.status
        this.init(status);
    }
    init(status){
        if(status === 400){
            new HttpBadRequestError(ctx);
        }else if(status === 500){
            new HttpCustomError(ctx);
        }
    }
};

