import {defineModel,Sequelize} from '../processors/db';

//文章表

const Article = defineModel("article", {   
    /**文章id */
    article_id:{
        type: Sequelize.INET, // 字段类型
        allowNull: false, // 是否允许为空
        primaryKey: true, // 是否主键
    },
    /**文章标题 */
    title:{
        type: Sequelize.STRING, // 字段类型
        allowNull: false, // 是否允许为空
    },
     /**文章内容 */
    content:{
        type: Sequelize.STRING, // 字段类型
        allowNull: false, // 是否允许为空
    },
    /**文章封面 */
    cover_url:{
        type: Sequelize.INET, // 字段类型
        allowNull: false, // 是否允许为空
    },
    /**点赞数 */
    like_count:{
        type:Sequelize.INET,
        allowNull: true, // 是否允许为空
    },
    /**浏览量 */
    view_count:{
        type:Sequelize.INET,
        allowNull: true, // 是否允许为空
    }
})

export default Article;