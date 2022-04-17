import { Sequelize, defineModel } from '../processors/db';

export const ArticleCategoty = defineModel('article_categoty', {
  id: {
    type: Sequelize.CHAR, // 字段类型
    allowNull: false, // 是否允许为空
    primaryKey: true, // 是否主键
  },
  /**分类id */
  categoty_id: {
    type: Sequelize.INTEGER, // 字段类型
    allowNull: false, // 是否允许为空
  },
  /**文章id */
  article_id: {
    type: Sequelize.CHAR, // 字段类型
    allowNull: false, // 是否允许为空
  },
  /**分类名称 */
  categoty_name: {
    type: Sequelize.STRING, // 字段类型
    allowNull: false, // 是否允许为空
  },
});
