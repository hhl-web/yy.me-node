import Koa from 'koa'
import config from './config/index'
import InitController from './controllers'
import serve from 'koa-static'
import errorHandler from './middlerwares/errorHandler'
import render from 'koa-swig'
import co from 'co'
import log4js   from 'log4js'
import {historyApiFallback} from 'koa2-connect-history-api-fallback';
const app = new Koa();

log4js.configure({
    appenders: { 
        globalError: { 
            type: "file", 
            filename: "./logs/error.log" 
        },
        httpLog:{
            type: "file", 
            filename: "./logs/info.log" 
        },
       
        
    },
    categories: { 
        default: { 
            appenders: ["globalError"], 
            level: "error"
        },
        http:{
            appenders: ["httpLog"], 
            level: "info"
        },
      
    }
})
const  logger = log4js.getLogger('globalError');
const loggerHttp = log4js.getLogger('http');
errorHandler.error(app,logger);

app.use(serve(config.staticDir));

app.use(historyApiFallback({index:'/',whiteList: ['/api','/model'] }));

InitController.init(app,loggerHttp);

app.context.render = co.wrap(render({  
    root:config.viewDir, 
    cache: config.viewCache, 
    ext: 'html',
    writeBody:false,
    varControls:['[[',']]'],
    autoescape: true,
}));

app.listen(config.port,(ctx)=>{
    console.log(`server is running: http://localhost:${config.port}`)
});

