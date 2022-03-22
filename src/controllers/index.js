
const Router = require('koa-Router');
const router =new Router();

const ArticleController = require('./articleController');
const articleController = new ArticleController();

class InitController {
    static init(app,logger){
        router.get('/api/article/searchBycc',(ctx)=>articleController.searchBycc(ctx,logger));
        router.get('/api/article/searchById',(ctx)=>articleController.searchById(ctx,logger));
        router.post('/api/article/create',(ctx)=>articleController.create(ctx,logger));

        // router.get('/api/about',(ctx)=>{
        //     aboutController.action(ctx,logger);
        //     logger.info(`res:${ctx.request}`)
        //     console.log(logger)
        // });
        // router.get('/model/getList',listController.action)
        // router.get('/', async (ctx) => {
        //     ctx.body = await ctx.render('index')
        // })
       
        app.use(router.routes()).use(router.allowedMethods())
    }
}

export default InitController
// module.exports =  InitController;