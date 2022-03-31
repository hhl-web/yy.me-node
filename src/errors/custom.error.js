import {HttpStatus,HTTP_CUSTOM_TEXT_DEFAULT} from '../const/http';
import { HttpError } from '../decorators/http.decorators';

export class HttpCustomError{
    constructor(ctx,errorMsg,status){
        this.init(ctx,errorMsg,status)
    }
    init(ctx,errorMsg,status){
        ctx.response.status =200;
        ctx.response.body =HttpError(errorMsg || HTTP_CUSTOM_TEXT_DEFAULT,status || HttpStatus.INTERNAL_SERVER_ERROR)
    }
}