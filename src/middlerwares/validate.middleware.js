import { HttpCustomError } from '../errors/custom.error';
export class ValidateMiddleware {
  static validate(schema) {
    return async (ctx, next) => {
      const method = ctx.request.method;
      let params;
      if (method === 'GET') {
        params = ctx.request.query;
      } else {
        params = ctx.request.body;
      }
      const { error } = schema.validate(params);
      if (error) {
        new HttpCustomError(ctx, error.message);
        return;
      }
      await next();
    };
  }
}
