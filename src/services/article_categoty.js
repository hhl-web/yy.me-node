import {
    ArticleCategoty,
    ArticleTag,
    Article,
    CommentTable,
    ReplayTable
} from '../processors/init.js'
export class ArticleCategotyService{
    /**
     * 新增分类
     * @categoty_id
     * @article_id
     * @categoty_name
     */
    static async create(params){ 
        const instance = await ArticleCategoty.create(params);
        return instance;
    }
     /**
     * 根据分类id查询文章
     * @categoty_id
     * @cover_url
     * @content
     * @title
     */
    async getArticleByCategotyId(categoty_id){
        return ArticleCategoty.findAll({
            where:{
                categoty_id
            }
        })
    }
}