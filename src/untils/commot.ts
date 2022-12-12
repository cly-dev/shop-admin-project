/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-12-11 21:10:30
 * @Description: 
 */
const debounce=(fn:Function,time:number)=>{
    let timer:any=null;
    return function(this:any,...args:any){
        if(timer)clearTimeout(timer)
       timer=setTimeout(()=>{
            fn.call(this,args);
        },time)

    }
}