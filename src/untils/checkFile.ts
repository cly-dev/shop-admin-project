/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-12-19 22:13:07
 * @Description: 文件校验
 */
import {IMAGEITEM,VEDIOITEM} from "@/constant/fileType"
export const checkMedioType=(type:'image' | 'video',fileName:string)=>{
        if(!fileName || !type)return false
        const arr=fileName.split('.');
        const name=arr[arr.length - 1];
        if(type==='image'){
            return IMAGEITEM.includes(name);
        }else {
            return VEDIOITEM.includes(name);
        }
}
