
import Router from 'koa-Router'
const router =new Router();
import {ArticleController} from './articleController';

export class InitController {
    static init(app){
        router.get('/api/article/searchBycc',(ctx)=>ArticleController.searchBycc(ctx));
        router.get('/api/article/searchById',(ctx)=>ArticleController.searchById(ctx));
        router.post('/api/article/create',(ctx)=>ArticleController.create(ctx))
        app.use(router.routes()).use(router.allowedMethods())
    }
}
