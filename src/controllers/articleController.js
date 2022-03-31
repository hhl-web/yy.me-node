import {Controller} from './controller';
import ArticleService  from '../services/article';


export class ArticleController extends Controller{
    constructor(options){
        super(options)
        this.a={};
    }
    // 根据分类查找文章
    async searchBycc(ctx){
        const reqParams=ctx.request.query;
        // await ArticleService.
        // ctx.body = 'searchBycc';
        console.log(t)
        // ctx.body=500/
        // ctx.response.status = 500;
        // 
        // console.log(ctx)
    }
    // 根据id查看详情
    searchById(ctx){
        ctx.body = 'searchById'
    }
    // 文章创建
    async create(ctx){
        console.log(ctx);
        const reqParams = ctx.request.body;
        console.log(reqParams,'reqParams')
        // try{
            const result=await ArticleService.createArticle(reqParams);
            // ctx.body=this.dealResponse(200,result)
        // }catch(err){
            // ctx.body=this.dealResponse(500,result)
        // }
    }
}
