import {Controller} from './controller';
import {ArticleService}  from '../services/article';
import {ArticleCategotyService}  from '../services/article_categoty';
import { v4 as uuidv4 } from 'uuid';
export class ArticleController extends Controller{
    // 文章创建
    static  async create(ctx){
        const id =uuidv4();
        const {categoty_id,categoty_name,title,content,cover_url} =ctx.request.body;
        await ArticleCategotyService.create({
            id:id,
            article_id:id,
            categoty_id:categoty_id,
            categoty_name:categoty_name,
        });
        await ArticleService.create({
            article_id:id,
            title,
            content,
            cover_url
        });
        ctx.response.status =200;
        ctx.response.data ='创建成功!';
    }
    // 根据分类查找文章
    static async searchBycc(ctx){
        const reqParams=ctx.request.query;
    }
    // 根据id查看详情
    static searchById(ctx){
        ctx.body = 'searchById'
    }
}
