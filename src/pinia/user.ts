/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-10-21 16:29:24
 * @Description: 创建状态库
 */
import {defineStore} from "pinia";
// import  {computed, ref,reactive} from "vue";

import {SETUSERDATA,RESETUSERDATA} from "./actionType";
type T={userData:UserType.UserField | null}

//常规声明
export default defineStore('user',{
    state:():T=>{
        return {
            userData:{
                adminId:''
            }
        }
    },
    persist:{
        enabled:true
    },
    actions:{
        //设置用户登录信息
        [SETUSERDATA]:function(data:UserType.UserField){
            this.userData=data
        },
        [RESETUSERDATA]:function(state:T){
            state.userData=null
        }
    },
    getters:{},

})

//可以通过传入一个函数对状态进行管理

// export const useUserData=defineStore('user',()=>{
//     const userData:UserType.UserField={
//         adminId:''
//     }
//     // const [SETUSERDATA]=()=>{
//     //     return ''
//     // }

//     const name=ref<any>('我是阿勇');
//     const data=reactive<{name:string,age:number}>({
//         name:'阿勇',
//         age:13
//     })
//     const getname=computed(()=>{
//         return `${name.value} 我来啦`;
//     })
//     const handleChange=()=>{
//         name.value='我是阿勇111';
//     }
//     return {name,getname,handleChange,data}
// })