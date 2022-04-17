import { HttpBadRequestError } from '../errors/bad-request.error';
import { HttpCustomError } from '../errors/custom.error';
/**
 * 错误拦截器
 */
export class ErrorInterceptor {
  constructor(options) {
    const { ctx, status } = options;
    this.init(ctx, status);
  }
  /**
   * 错误拦截器
   * @param {*} status
   *
   */
  init(ctx, status) {
    if (status === 400) {
      new HttpBadRequestError(ctx);
    } else if (status === 500) {
      new HttpCustomError(ctx);
    }
  }
}
