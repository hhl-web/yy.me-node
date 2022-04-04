import {config} from './config/index';
import {AppModule} from './app.module'

function bootstrap(){
    const app = AppModule.createApp();
    app.listen(config.port,(ctx)=>{
        console.log(`server is running: http://localhost:${config.port}`)
    });
}
bootstrap();


