import {
    ArticleCategoty,
    ArticleTag,
    Article,
    CommentTable,
    ReplayTable
} from '../processors/init.js'
const v4 =require('uuid')
class ArticleService{
    /**
     * 新增文章
     * @categoty_id
     * @cover_url
     * @content
     * @title
     */
    async createArticle(params){
        console.log(params,'---')
        try{
            const article= await Article.create(params);
            const articleCategoty= await ArticleCategoty.create({
                categoty_id:params.categoty_id,
                article_id:params.id,
                categoty_name:params.categoty_name
            });
            console.log(11,article);
        }catch(err){
            console.log(err)
        }
        // params.id =v4();
       
        
  
       
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

export default new ArticleService();