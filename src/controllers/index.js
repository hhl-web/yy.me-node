
const Router = require('koa-Router');
const router =new Router();

import ArticleController from './articleController';
const articleController = new ArticleController();

class InitController {
    static init(app,logger){
        router.get('/api/article/searchBycc',(ctx)=>articleController.searchBycc(ctx,logger));
        router.get('/api/article/searchById',(ctx)=>articleController.searchById(ctx,logger));
        router.post('/api/article/create',(ctx)=>articleController.create(ctx,logger))
       
        app.use(router.routes()).use(router.allowedMethods())
    }
}

export default InitController
// module.exports =  InitController;