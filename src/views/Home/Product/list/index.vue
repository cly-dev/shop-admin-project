<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:22:34
 * @Description: 商品管理
-->
<template>
  <LyLayout :tableData="observerState.data.list" :total="observerState.data.total" :loading="observerState.loading" :column="tableConfig.Column" :onAdd="handleAdd" :modalConfig="modalConfig" title="商品管理" @search="handleSearch"  :searchConfig="searchConfig" ></LyLayout>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import LyLayout from "@/components/LyLayout/index.vue";
import { tableConfig,searchConfig,modalConfig} from './constant';
import {observerState} from "./context";
import {search} from "./useProduct";
const router=useRouter()
const handleClick = (data: any) => {
  console.log(data)
}
const handleAdd=()=>{
  router.push('/home/product/info')
}
const handleSearch = (params?: any) => {
  search(params)
}

</script>

<style scoped>
</style>