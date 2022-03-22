import {sequelize,Sequelize} from '../processors/db';

//文章表
const Article = sequelize.define(
    "article",
    // 表字段信息配置
    {
        id:{
            type: Sequelize.STRING, // 字段类型
            allowNull: false, // 是否允许为空
            primaryKey: true, // 是否主键
        },
        title:{
            type: Sequelize.STRING, // 字段类型
            allowNull: false, // 是否允许为空
        },
        content:{
            type: Sequelize.STRING, // 字段类型
            allowNull: false, // 是否允许为空
        },
        classification:{
            type: Sequelize.STRING, // 字段类型
            allowNull: false, // 是否允许为空
        },
        imgUrl:{
            type: Sequelize.STRING, // 字段类型
            allowNull: true, // 是否允许为空
        },
        upNum:{
            type:Sequelize.NUMBER,
            allowNull: true, // 是否允许为空
        },
        traffic:{
            type:Sequelize.NUMBER,
            allowNull: true, // 是否允许为空
        },
        comments:{
            type:Sequelize.NUMBER,
            allowNull: true, // 是否允许为空
        },
    }
)

Article.sync({ force: false, alter:true}); // 是否自动创建表

export default Article;