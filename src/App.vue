<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-11-05 20:43:54
 * @Description: 
-->
<template>
  <el-config-provider :locale="zhCn">
    <router-view />
</el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
