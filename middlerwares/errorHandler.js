// 中间件思想
class ErrorHandler{
    static error(app,logger){
        app.use(async(ctx,next)=>{
            try{
                await next();
            }catch(error){
                logger.error(error.message);
                ctx.body= '500'
            }
        })
    }
}
export default ErrorHandler;