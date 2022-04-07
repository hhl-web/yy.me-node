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
     */
    static async findAll(categoty_id){
        const categotys= await ArticleCategoty.findAll({
            where:{
                categoty_id,
            },
            include:{
                model:Article,
                as:'articles',
            },
            attributes:['categoty_id','categoty_name'],
        });
        return categotys;
    }
}