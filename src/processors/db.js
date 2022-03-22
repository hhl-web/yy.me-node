
import Sequelize from 'sequelize';
import config from '../config/index';

const options =config.db || {};
const optConfig =config.dbConfig || {}

const sequelize =new Sequelize(
    options.database,
    options.user,
    options.password,
    {
        dialect:optConfig.dialect,
        host:options.host,
        port:options.port,
        logging:optConfig.logging,
        pool: optConfig.pool,
    }
)
// 测试是否连接成功
sequelize.authenticate().then((result) => {
    console.log('connect success')
}).catch((err) => {
    console.log('connect error')
});

export {
    sequelize,
    Sequelize
}