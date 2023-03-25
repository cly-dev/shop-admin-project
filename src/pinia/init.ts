import { computed } from 'vue';
/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-01-02 23:41:55
 * @Description: 
 */
import {defineStore} from "pinia";
import {ref} from "vue"


// //声明一个store
// const init=defineStore('init',{
//     //定义一个state
//     state:()=>({
//         code:0,
//     }),
//     //定义getters
//     getters:{
//         getCode:(state:any)=>{
//             return state.code * 2
//         }
//     },
//     //定义actions
//     actions:{
//         changeCode:function(){
//             console.log(this);
//             (this as any).code++;
//         }
//     }
// })
const init=defineStore('init',()=>{
    //通过ref声明状态
    const code=ref<number>(0);
    //计算属性
   const getCode=computed(()=>code.value * 2);
   //类型于actions
   const changeCode=()=>{
        code.value ++ ;
   }
   return {code,getCode,changeCode}
})
export default init;