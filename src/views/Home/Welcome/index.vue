<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-10-21 15:40:11
 * @Description: 
-->
<template>
  <div>
      <h1>欢迎使用该系统</h1>
      <!-- {{store.state}} -->
      {{data}}
      <!-- {{store.getters.getName}} -->
      <el-button type="primary" @click="handleClick">点我</el-button>
  </div>
</template>

<script setup lang="ts">
import {useData} from "@/pinia/user";
import {storeToRefs} from "pinia";
import store from "@/store";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
const useStore=useData();
//可以通过storeToRefs对pinia的状态进行结构成ref
const {data}=storeToRefs(useStore);
const handleClick=()=>{
  // store.commit('changeName','阿勇来啦');
  store.dispatch('asyncChangeName')
  useData().handleChange()
  data.value.name='啊啊啊'
  // useStore.$patch({name:'我是111'})
  
}
const name=ref<string>('');
</script>

<style scoped>

</style>