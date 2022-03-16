const path = require('path');
const devConfig ={
    port:3000,
    staticDir:path.join(__dirname,'../','assets'),
    viewDir: path.join(__dirname,'../','views'),
    viewCache:false
}

module.exports =devConfig;