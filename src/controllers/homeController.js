const Controller =require('./controller');
class HomeController extends Controller{
    constructor(){
        super()
    }
    action(ctx){
        throw new Error('500')
        ctx.body = 'home page!'
    }
}

module.exports = HomeController;