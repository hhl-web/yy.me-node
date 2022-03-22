import Article from '../models/article';
import v4 from 'uuid';
class ArticleService{
    //根据分类新增文章
    async createArticle(params){
        params.id =v4();
        return Article.create(params);
    }
    // 根据分类查询文章
    async getArticleByClassification(classification){
        return Article.findAll({
            where:{
                classification
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