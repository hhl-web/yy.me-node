
import Sequelize from 'sequelize';
import {config} from '../config/index';

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
        dialectOptions:{
            charset:'utf8mb4',  //字符集
            collate:'utf8mb4_unicode_ci'
        },
        //模型设置
        define:{   
            freezeTableName:true,    //自定义表面，不设置会自动将表名转为复数形式
            timestamps:false    //自动生成更新时间、创建时间字段：updatedAt,createdAt
        }
    },
)
/**
 * 
 * @param {*} name  表名
 * @param {*} attributes  属性
 * @returns 
 */
const defineModel = function (name, attributes) {
    const attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
            };
        }
    }
    attrs.version = {
        type: Sequelize.BIGINT,
    };
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: true,
        paranoid: true, 
        charset: 'utf8mb4', 
        collate: 'utf8mb4_general_ci',
        hooks: {
            beforeBulkCreate: function(obj){
                obj.version = 0 ;
            },
            beforeValidate: function(obj){
                if(obj.isNewRecord){
                    console.log('first');
                    obj.version = 0 ; 
                }else{
                    console.log('not first');
                    obj.version = obj.version + 1 ;
                }
            }
        }
    });
};

// 测试是否连接成功
sequelize.authenticate().then((result) => {
    console.log('connect success')
}).catch((err) => {
    console.log('connect error')
});

export {
    sequelize,
    Sequelize,
    defineModel
}