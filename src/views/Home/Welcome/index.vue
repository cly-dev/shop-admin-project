<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-10-21 15:40:11
 * @Description: 
-->
<template>
  <div>
      <h1>欢迎使用该系统</h1>
      <!-- {{ data }} -->
      <!-- {{ code }} -->
      <!-- {{ getCode }} -->
      <!-- <el-button type="primary" @click="handleClick">点我</el-button> -->
  </div>
</template>

<script setup lang="ts">
import useData from "@/pinia/user";
import useInit from "@/pinia/init"
import {storeToRefs} from "pinia";
import store from "@/store";
import { ref,watch } from "vue";
const useStore=useData();
const init=useInit();
const {code,getCode}=storeToRefs(init)
//可以通过storeToRefs对pinia的状态进行结构成ref
// const {data}=storeToRefs(useStore);
const handleClick=()=>{
  // init.changeCode()
  // init.$patch({code:init.code++})
  // init.code++;
  // console.log(init)
  // data.value.name="lalal1"
  // init.$patch((state:any)=>{
  //   console.log(state);
  //   state.code++;
  // })
    
}
init.$subscribe((mutations:any,state:any)=>{
  // console.log(mutations);
  // console.log(state)
})
watch(init,(newV:any)=>{
  // console.log(newV)
})
const name=ref<string>('');
</script>

<style scoped>

</style>