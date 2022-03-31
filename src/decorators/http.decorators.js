
// 成功装饰器
export const HttpSuccess =(message,code,data)=>{
    return {
        code,
        message,
        data
    }
}
// 失败装饰器
export const HttpError =(message,code)=>{
    return{
        code,
        message
    }
}