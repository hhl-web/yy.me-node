import {defineModel,Sequelize} from '../processors/db';

//标签表
const CommentTable = defineModel('comment_table',{   
    /**评论id */
    commont_id:{
        type: Sequelize.INET, // 字段类型
        allowNull: false, // 是否允许为空
        primaryKey: true, // 是否主键
    },
    /**文章id */
    article_id:{
        type: Sequelize.INET, // 字段类型
        allowNull: false, // 是否允许为空
    },
     /**评论内容 */
    comment_content:{
        type: Sequelize.STRING, // 字段类型
        allowNull: false, // 是否允许为空
    }
})

export default CommentTable;