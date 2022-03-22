const Controller =require('./controller');
class AboutController  extends Controller{
    constructor(options){
        super()
    }
    action(ctx){
        ctx.body = 'about page!'
    }
}

module.exports = AboutController;