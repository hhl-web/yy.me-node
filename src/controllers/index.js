import Router from 'koa-Router';
const router = new Router();
import { ArticleController } from './articleController';
import { Schema } from '@/validate';
import { ValidateMiddleware } from '../middlerwares/validate.middleware';
const schema = new Schema();

export class InitController {
  static init(app) {
    router.get('/api/article/searchByCategoty', ValidateMiddleware.validate(schema.searchByCategoty()), (ctx) => ArticleController.searchByCategoty(ctx));
    router.get('/api/article/searchByArticleId', ValidateMiddleware.validate(schema.searchByArticleId()), (ctx) => ArticleController.searchByArticleId(ctx));
    router.post('/api/article/create', ValidateMiddleware.validate(schema.create()), (ctx) => ArticleController.create(ctx));
    router.get('/api/categoty', (ctx) => ArticleController.getCategoty(ctx));

    
    app.use(router.routes()).use(router.allowedMethods());
  }
}

