import {
    ArticleCategoty,
    ArticleTag,
    Article,
    CommentTable,
    ReplayTable
} from '../processors/init.js'
export class ArticleService{
    /**
     * 新增文章
     * @categoty_id
     * @cover_url
     * @content
     * @title
     */
    static async create(params){
        const instance= await Article.create(params);
        return instance;
    }
    //根据文章id查看详情
    static async findOne(article_id){
        return Article.findOne({
            where:{
                article_id
            }
        })
    }
    //点赞 & 访问文章

    //评论 & 访问文章
}

