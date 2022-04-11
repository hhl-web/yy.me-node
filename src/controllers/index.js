
import Router from 'koa-Router'
const router =new Router();
import {ArticleController} from './articleController';

export class InitController {
    static init(app){
        router.get('/api/article/searchByCategoty',(ctx)=>ArticleController.searchByCategoty(ctx));
        router.get('/api/article/searchByArticleId',(ctx)=>ArticleController.searchByArticleId(ctx));
        router.post('/api/article/create',(ctx)=>ArticleController.create(ctx));
        router.get('/api/categoty',(ctx)=>ArticleController.getCategoty(ctx));
        app.use(router.routes()).use(router.allowedMethods())
    }
}
