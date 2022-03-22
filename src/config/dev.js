const path = require('path');
const devConfig ={
    port:3001,
    staticDir:path.join(__dirname,'../','assets'),
    viewDir: path.join(__dirname,'../','views'),
    viewCache:false,
    db:{
        host:'cdb1te.test.srv.mc.dd',
        user:'root',
        password:'1234qwer',
        database:'hhl_test',
        port:'3306'
    },
    dbConfig:{
        logging:false,
        dialect:'mysql',
        pool:{
            min:0,
            max:5,
            idle:30000,
            acquire: 60000,
        }
    }
}

module.exports =devConfig;