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
        database:'hhl_test'
    }
}

module.exports =devConfig;