/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-10-21 16:29:24
 * @Description: 创建状态库
 */
import {defineStore} from "pinia";
import  {computed, ref} from "vue";

//常规声明
// export const useData=defineStore('use',{
//     state:()=>{
//     return {
//         name:'我是pinia的阿勇'
//     }
//     },
//     actions:{},
//     getters:{},

// })

//可以通过传入一个函数对状态进行管理

export const useData=defineStore('use',()=>{
    const name=ref<any>('我是阿勇');
    const getname=computed(()=>{
        return `${name.value} 我来啦`;
    })
    const handleChange=()=>{
        name.value='我是阿勇111';
    }
    return {name,getname,handleChange }
})