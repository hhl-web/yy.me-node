import {Sequelize,defineModel} from '../processors/db';

const ArticleCategoty =defineModel('article_categoty',{   
    /**分类id */
    categoty_id:{
        type: Sequelize.INET, // 字段类型
        allowNull: false, // 是否允许为空
        primaryKey: true, // 是否主键
    },
    /**文章id */
    article_id:{
        type: Sequelize.INET, // 字段类型
        allowNull: false, // 是否允许为空
    },
     /**分类名称 */
     categoty_name:{
        type: Sequelize.STRING, // 字段类型
        allowNull: false, // 是否允许为空
    }
})

export default ArticleCategoty;