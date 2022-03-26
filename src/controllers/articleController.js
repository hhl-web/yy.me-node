import Controller from './controller';
import ArticleService  from '../services/article';


class ArticleController extends Controller{
    constructor(){
        super()
    }
    // 根据分类查找文章
    async searchBycc(ctx){
        const reqParams=ctx.request.query;
        // await ArticleService.
        ctx.body = 'searchBycc';
        console.log(ctx)
    }
    // 根据id查看详情
    searchById(ctx){
        ctx.body = 'searchById'
    }
    // 文章创建
    async create(ctx){
        console.log(ctx);
        const reqParams = ctx.request.body;
        try{
            const result=await ArticleService.create(reqParams);
            console.log(result)
            ctx.body=this.dealResponse(200,result)
        }catch(err){
            ctx.body=this.dealResponse(500,result)
        }
    }
}

export default ArticleController;