/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-04-06 23:45:27
 * @Description: 
 */

import { computed } from "vue";
export default function useVModel(props:any,propsName:string,emit:Function){
    const model=computed({
        set(val:any){
            emit(`update:${propsName}`,val)
        },
        get(){
            return new Proxy(props[propsName],{
                set(obj,name,newValue){
                    emit(`update:${propsName}`,{
                        ...props[propsName],
                        [name]:newValue
                    })
                    return true
                }
            })
        }
    })
    return model;
}