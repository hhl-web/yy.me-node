import ArticleCategoty from '../processors/sync_table';
const v4 =require('uuid')
class ArticleCategotyService{
    /**
     * 新增分类
     * @categoty_id
     * @article_id
     * @categoty_name
     */
     async createArticleCategory(params){
        const articleCategoty= await ArticleCategoty.create(params);
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

export default new ArticleCategotyService();