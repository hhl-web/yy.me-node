import path from 'path';
export const devConfig = {
  port: 3009,
  crossDomain: {
    allowedOrigins: [`http://localhost:3009`],
    allowedReferer: '',
  },
  // staticDir:path.join(__dirname,'../','assets'),
  // viewDir: path.join(__dirname,'../','views'),
  viewCache: false,
  db: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root1234',
    database: 'blog',
    port: '3306',
  },
  dbConfig: {
    logging: false,
    dialect: 'mysql',
    pool: {
      min: 0,
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
  },
};
