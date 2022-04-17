import { HttpSuccess } from '../decorators/http.decorators';
export class SuccessInterceptor {
  constructor(options) {
    const { ctx, data } = options;
    this.init(ctx, data);
  }
  /**
   * 错误拦截器
   * @param {*} status
   *
   */
  init(ctx, data) {
    ctx.response.body = HttpSuccess('请求成功', data || {});
  }
}
