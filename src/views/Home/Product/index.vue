<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:22:34
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-21 22:16:00
 * @FilePath: \shop\src\views\Home\Product\index.vue
 * @Description: 商品管理
-->
<template>
  <div>商品管理</div>
  <LyTable :Column="ProductColumn" :data="tableData"></LyTable>
</template>

<script setup lang="ts">
import LyTable from '@/components/LyTable/index'
import { ProductColumn } from './constant'
const tableData = [
  {
    id: '1',
    title: '2016-05-03',
  },
  {
    id: '2',
    title: '3016-05-03',
  },
]
</script>

<style scoped>
</style>