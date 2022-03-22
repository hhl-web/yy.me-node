const Controller =require('./controller');
import ListModel from '../models/listModel'
const listModel =new ListModel()
// controller层是 控制层 。根据用户的行为做不同的处理，通过路由的形式，映射不同的模块。比如要读数据，读完数据要返回给用户
class ListController extends Controller{
    constructor(){
        super()
    }
    async action(ctx){
       const result = await listModel.getList() //获取数据
       ctx.body =await ctx.render('url',{
            data:result.data
       })
    }
}

export default ListController