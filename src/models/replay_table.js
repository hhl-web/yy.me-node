import { defineModel, Sequelize } from '../processors/db';

//标签表
const ReplayTable = defineModel('replay_table', {
  /**回复id */
  replay_id: {
    type: Sequelize.CHAR, // 字段类型
    allowNull: false, // 是否允许为空
    primaryKey: true, // 是否主键
  },
  /**评论id */
  commont_id: {
    type: Sequelize.CHAR, // 字段类型
    allowNull: false, // 是否允许为空
  },
  /**回复内容 */
  replay_content: {
    type: Sequelize.STRING, // 字段类型
    allowNull: false, // 是否允许为空
  },
});
export default ReplayTable;
