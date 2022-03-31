
import Router from 'koa-Router'
const router =new Router();

import {ArticleController} from './articleController';
const articleController = new ArticleController();

export class InitController {
    static init(app){
        router.get('/api/article/searchBycc',(ctx)=>articleController.searchBycc(ctx));
        router.get('/api/article/searchById',(ctx)=>articleController.searchById(ctx));
        router.post('/api/article/create',(ctx)=>articleController.create(ctx))
        app.use(router.routes()).use(router.allowedMethods())
    }
}
