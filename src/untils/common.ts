/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-12-11 21:10:30
 * @Description: 防抖
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
//时间戳转具体时间
export const timetToDate=(timer:number)=>{
    const date=new Date(timer);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
//树转列表
export function treeToList(arr:[]){
        let result: any[]=[];
        if(arr.length===0){
          return result;
        }
        arr.forEach((item:any)=>{
            result.push(item);
            if(item?.children){
              result=[...result,...treeToList(item.children)];
            }
        })
        return result;
    }
export const checkImg = (type: string) => {
	return ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'].includes(type)
}
//是否是视频
export const checkVideo = (type: string) => {
	return ['video/mp4', 'video/mov'].includes(type)
}
