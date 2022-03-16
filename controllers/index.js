
const Router = require('koa-Router');
const router =new Router();
const HomeController = require('./homeController');
const homeController = new HomeController();

const AboutController = require('./aboutController');
const aboutController = new AboutController();

import ListController from './listController';
const listController =new ListController()
class InitController {
    static init(app,logger){
        router.get('/api/home',(ctx)=>homeController.action(ctx,logger));
        router.get('/api/about',(ctx)=>{
            aboutController.action(ctx,logger);
            logger.info(`res:${ctx.request}`)
            console.log(logger)
        });
        router.get('/model/getList',listController.action)
        router.get('/', async (ctx) => {
            ctx.body = await ctx.render('index')
        })
       
        app.use(router.routes()).use(router.allowedMethods())
    }
}

export default InitController
// module.exports =  InitController;