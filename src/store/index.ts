/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-10-21 15:40:11
 * @Description: store状态管理
 */
import { createStore } from "vuex";

export default createStore({
  state: {
    name:'阿勇'
  },
  getters: {
    getName:(state:any)=>{
      return state.name + '我来啦';
    }
  },
  mutations: {
    changeName:(state,data)=>{
      state.name=data;
    }
  },
  actions: {
    asyncChangeName:(ctx:any)=>{
      setTimeout(()=>{
        ctx.commit('changeName','我是异步的阿勇')
      },2000)
    }
  },
  modules: {},
});
