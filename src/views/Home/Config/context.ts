/*
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-13 12:08:37
 * @Description: 商品组件共享数据
 */
import {reactive} from "vue";
type T={
    id:string,
    visible:boolean
}
export const observerState=reactive<T>({
    id:'',
    visible:false,
})
