<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:22:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-08 21:45:51
 * @FilePath: \shop\src\views\Home\Product\index.vue
 * @Description: 商品管理
-->
<template>
  <LyLayout :onAdd="handleAdd" :modalConfig="modalConfig" title="商品管理" :search="handleSearch" :tableConfig="tableConfig" :searchConfig="searchConfig" ></LyLayout>
</template>

<script setup lang="ts">
import { FormType } from '@/types/form'
import {useRouter} from "vue-router";
import LyLayout from "@/components/LyLayout/index.vue";
import { tableConfig,searchConfig,modalConfig} from './constant'
const router=useRouter()
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
const formConfig: FormType.FormConfig = {
  config: {
    items: [
      {
        modal: 'input',
        name: 'title',
        label: 'title',
        defaultValue: '2000',
      },
      {
        modal: 'select',
        name: 'age',
        label: 'age',
        options: [
          {
            label: '1',
            value: 1,
          },
        ],
      },
      {
        modal: 'radio',
        name: 'hobby',
        label: 'hobby',
        options: [
          {
            label: '1',
            value: 1,
          },
          {
            label: '2',
            value: 2,
          },
        ],
      },
      {
        modal: 'input',
        name: 'title',
        label: 'title',
        defaultValue: '2000',
      },
      {
        modal: 'select',
        name: 'age',
        label: 'age',
        options: [
          {
            label: '1',
            value: 1,
          },
        ],
      },
      {
        modal: 'radio',
        name: 'hobby',
        label: 'hobby',
        options: [
          {
            label: '1',
            value: 1,
          },
          {
            label: '2',
            value: 2,
          },
        ],
      },
    ],
    rules: [],
  },
  options: {},
}
const handleClick = (data: any) => {
  console.log(data)
}
const handleAdd=()=>{
  router.push('/home/product/info')
}
const handleSearch = (params?: any) => {
  console.log(params)
  console.log('-----------=--------')
}
</script>

<style scoped>
</style>