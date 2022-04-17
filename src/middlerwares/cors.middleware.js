import { HTTP_METHODS } from '../const/http-method';
export class CorsMiddleware {
  static cors() {
    // const origins = ctx.request.headers.origin;
    // const origin = (Array.isArray(origins) ? origins[0] : origins) || ''
    // const allowedOrigins = [...config.crossDomain.allowedOrigins];
    // 请求头
    // const allowedHeaders = [
    //     'Authorization',
    //     'Origin',
    //     'No-Cache',
    //     'X-Requested-With',
    //     'If-Modified-Since',
    //     'Pragma',
    //     'Last-Modified',
    //     'Cache-Control',
    //     'Expires',
    //     'Content-Type',
    //     'X-E4M-With',
    // ]
    const allowedMethods = HTTP_METHODS;
    return async (ctx, next) => {
      // // const origins = ctx.request.headers.origin;
      ctx.set('Access-Control-Allow-Origin', '*');
      ctx.set('Access-Control-Allow-Headers', ctx.get('Access-Control-Request-Headers'));
      ctx.set('Access-Control-Allow-Methods', allowedMethods.join(','));
      ctx.set('Content-Type', 'application/json;charset=utf-8');
      ctx.set('Access-Control-Allow-Credentials', true);
      ctx.set('Access-Control-Max-Age', String(1728000));
      if (ctx.method == 'OPTIONS') {
        ctx.body = '';
        ctx.status = 204;
      } else {
        await next();
      }
    };
  }
}
