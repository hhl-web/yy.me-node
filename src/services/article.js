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
     /**
     * 根据分类查询文章
     * @categoty_id
     * @cover_url
     * @content
     * @title
     */
    async getArticleByCategotyId(categoty_id){
        return Article.findAll({
            where:{
                categoty_id
            }
        })
    }
    //根据文章id查看详情
    async getArticleById(id){
        return Article.findAll({
            where:{
                id
            }
        })
    }
    //点赞 & 访问文章

    //评论 & 访问文章
}

