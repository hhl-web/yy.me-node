import {defineModel,Sequelize} from '../processors/db';

//标签表
const  ArticleTag=defineModel('article_tag', {   
    /**标签id */
    tag_id:{
        type: Sequelize.INET, // 字段类型
        allowNull: false, // 是否允许为空
        primaryKey: true, // 是否主键
    },
    /**文章id */
    article_id:{
        type: Sequelize.INET, // 字段类型
        allowNull: false, // 是否允许为空
    },
     /**标签名称 */
    tag_name:{
        type: Sequelize.STRING, // 字段类型
        allowNull: false, // 是否允许为空
    }
})

export default ArticleTag;