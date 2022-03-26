import ArticleCategoty from '../models/article_categoty.js';
const v4 =require('uuid')
class ArticleCategotyService{
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