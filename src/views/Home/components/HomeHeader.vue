<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-17 22:20:19
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-17 22:54:13
 * @FilePath: \shop\src\views\Home\components\HomeHeader.vue
 * @Description: 首页头部
-->
<template>
  <header class="homeHeader">
    <div class="info">用户信息</div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.homeHeader {
  height: 4.5rem;
  display: flex;
  flex-direction: row-reverse;
  background: white;
  width: 100%;
  .info {
    max-width: 15rem;
    flex: 1;
    border: 1px solid red;
  }
}
</style>