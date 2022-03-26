function throttle(cb,t,first){
    let isFirst=first;
    let exceDate = +new Date();
    let timer =null;
    return function(){
        if(isFirst){
            cb();
            exceDate =+new Date()
            isFirst =false
        }else{
            let currentDate = +new Date();

            if(currentDate-exceDate >= t){
                cb();
                exceDate = +new Date()
            }else{
                timer && clearTimeout(timer);
                const wait = t-(+new Date - exceDate);
                timer=setTimeout(()=>{
                    cb();
                    exceDate =+new Date()
                },wait)
            }
        }
    }
}

