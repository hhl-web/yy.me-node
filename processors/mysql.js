import mysql from 'mysql';
import config from '../config/index'

const options =config.db;

// 建立链接
function __connection() {
        const connection = mysql.createConnection(options);
        connection.connect();
        return connection;
};
    
export default function query(sql, parmas = null) {
    const  connection = __connection();
    return new Promise(function (reject, resolve) {
        connection.query(sql, parmas, function (error, results, fields) {
            if (error)reject(results);
            connection.end();
            resolve(data);
        });
    })
}
