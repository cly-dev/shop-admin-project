<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-17 22:20:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-16 16:13:11
 * @FilePath: \shop\src\views\Home\components\HomeHeader.vue
 * @Description: 首页头部
-->
<template>
  <header class="homeHeader">
    <div class="info">{{useAccountInfo.userData?.userName}}</div>
  </header>
</template>

<script setup lang="ts">
import useStore from "@/pinia/user";

const useAccountInfo=useStore();
console.log(useAccountInfo)



</script>

<style scoped lang="scss">
.homeHeader {
  min-height: 4.5rem;
  display: flex;
  flex-direction: row-reverse;
  background: white;
  width: 100%;
  .info {
    display: flex;
    align-items: center;
  justify-content: center;
    max-width: 15rem;
    flex: 1;
  }
}
</style>