<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:22:34
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-30 23:01:10
 * @FilePath: \shop\src\views\Home\Product\index.vue
 * @Description: 商品管理
-->
<template>
  <LyTable
    :Column="ProductColumn"
    :data="tableData"
    :searchConfig="searchConfig"
    :search="handleSearch"
  >
  </LyTable>
</template>

<script setup lang="ts">
import { FormType } from '@/types/form'
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
const searchConfig = {
  formConfig,
}
const handleClick = (data: any) => {
  console.log(data)
}
const handleSearch = (params?: any) => {
  console.log(params)
  console.log('-----------=--------')
}
</script>

<style scoped>
</style>