
export class Controller{
    dealParams(){

    }
    dealResponse(status,result){
        const response ={};
        switch(status){
            case 200:
                response.code =0;
                response.data =result;
                response.success =true;
                break;
            case 500:
                response.code =-1;
                response.data =result;
                response.success =false;

        }
    }
}