import {Controller} from './controller';
import {ArticleService}  from '../services/article';
import {ArticleCategotyService}  from '../services/article_categoty';
import { v4 as uuidv4 } from 'uuid';
export class ArticleController extends Controller{
    // 文章创建
    static  async create(ctx){
        const id =uuidv4();
        const {categoty_id,categoty_name,title,content,cover_url,cover_name} =ctx.request.body;
        const result = await Promise.all([ArticleService.createArticle({
            article_id:id,
            title,
            content,
            cover_url,
            cover_name
        }),ArticleCategotyService.createArticleCategoty({
            id:id,
            article_id:id,
            categoty_id:categoty_id,
            categoty_name:categoty_name,
        })])
        console.log(result,'---result');
        ctx.response.status =200;
    }
    // 根据分类查找文章
    static async searchByCategoty(ctx){
        const {categoty_id} =ctx.request.query;
        const categotys=await ArticleCategotyService.findAllByCategoty(categoty_id);
        ctx.response.status =200;
        if(!categotys) return ;
        ctx.body =categotys;
    }
    // 根据id查看详情
    static async searchByArticleId(ctx){
        const {article_id} = ctx.request.query;
        const article=await ArticleService.findOneByArticleId(article_id);
        ctx.response.status =200;
        if(!article) return
        ctx.body = article;
    }
    // 获取分类
    static async getCategoty(){
        const categotys =await ArticleCategotyService.getCategoty();
        ctx.response.status =200;
        ctx.body =categotys;
    }
}
