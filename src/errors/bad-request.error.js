import { HTTP_BAD_REQUEST_TEXT_DEFAULT, HttpStatus } from '../const/http';
import { HttpError } from '../decorators/http.decorators';
export class HttpBadRequestError {
  constructor(ctx, errorMsg, status) {
    this.init(ctx, errorMsg, status);
  }
  init(ctx, errorMsg, status) {
    ctx.response.status = 200;
    ctx.response.body = HttpError(status || HttpStatus.BAD_REQUEST, errorMsg || HTTP_BAD_REQUEST_TEXT_DEFAULT);
  }
}
