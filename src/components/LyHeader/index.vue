<!--
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-13 16:47:45
 * @Description: 通用头部
-->
<template>
  <div class="myHeader">
    <el-page-header @back="goBack">
    <template #content>
      <div class="headerContainer">
        <span class="text-large font-600 mr-3"> {{props.title}} </span>
      </div>
    </template>
    <template #extra>
            <slot name="right"></slot>
    </template>
  </el-page-header>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {defineProps,withDefaults} from "vue";
type Props={
  title:string,
  link:string 
}
const props=withDefaults(defineProps<Props>(),{
  title:'',
  link:''
})
const router=useRouter();
const goBack = () => {
  router.push(props.link)
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>