/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-10-21 16:25:04
 * @Description: 
 */
import {createPinia} from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
//创建pinia应用
const pinia=createPinia();
pinia.use(({store})=>{
    store.$subscribe((mutations:any,state:any)=>{
        console.log(mutations,state)
        console.log('-=--------------')
    },{detached:true})
},)
pinia.use(piniaPluginPersist)
export default pinia;