const Controller =require('./controller');
import ArticleService  from '../services/article';


class ArticleController extends Controller{
    constructor(){
        super()
    }
    // 根据分类查找文章
    searchBycc(ctx){
       ctx.body = 'searchBycc'
    }
    // 根据id查看详情
    searchById(ctx){
        ctx.body = 'searchById'
    }
    // 文章创建
    create(ctx){
        
    }
}

export default ArticleController;