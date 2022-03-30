console.log(process.env.NODE_ENV )
import ArticleCategoty from '../models/article_category';
import ArticleTag from '../models/article_tag';
import Article from '../models/article';
import CommentTable from '../models/comment_table';
import ReplayTable from '../models/replay_table';
import {sequelize} from './db.js';

/**
 * Article主表
 * ArticleCategoty 关联表
 * as 别名，给这个关联关系起别名，在查询结果中关联结果字段名也是这个
 * foreignKey 自定义外键 就是ArticleCategoty表关联Article主表的字段
 * sourceKey : 主表Article 的主键
 */
//  Article.Category =Article.hasMany(ArticleCategoty,{
//     as: 'Categoty',
//     foreignKey:'article_id',
//     sourceKey: 'id',
// });
Article.hasMany(ArticleCategoty,{
    as: 'Categotys',
    sourceKey: 'id',
});
ArticleCategoty.belongsTo(Article,{
    as:'Articles',
    foreignKey:'article_id',
    targetKey:'id'
});

(async ()=>{
    try{
        await sequelize.sync({
            force: true, alter:true
        });
    }catch(error){
        console.log(error)
    }
})()




export {
    ArticleCategoty,
    ArticleTag,
    Article,
    CommentTable,
    ReplayTable
}

