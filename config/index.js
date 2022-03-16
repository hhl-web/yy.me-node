
const devConfig =require('./dev');
const proConfig =require('./pro');

const config ={};

if(process.env.NODE_ENV === 'development'){
    Object.assign(config,devConfig)
}else if(process.env.NODE_ENV === 'production'){
    Object.assign(config,proConfig)
}else{

}

export default config;