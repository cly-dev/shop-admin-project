<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-17 22:11:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-01-18 13:47:06
 * @FilePath: \shop\src\views\Home\index.vue
 * @Description: 主页
-->
<template>
  <el-layout class="shop-layout">
    <HomeSider></HomeSider>
    <el-container class="shop-container">
      <HomeHeader></HomeHeader>
      <HomeMainer></HomeMainer>
      <HomeFooter></HomeFooter>
    </el-container>
  </el-layout>
</template>

<script lang="ts" setup>
import { HomeFooter, HomeSider, HomeHeader, HomeMainer } from './components/Layout'
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>