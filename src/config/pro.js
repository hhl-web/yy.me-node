
const proConfig ={
    port:80,
    viewCache:false,
    db:{
        host:'',
        user:'',
        password:'',
        database:'',
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
};
module.exports =proConfig;