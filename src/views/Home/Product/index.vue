<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:22:34
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-24 22:19:24
 * @FilePath: \shop\src\views\Home\Product\index.vue
 * @Description: 商品管理
-->
<template>
  <div>商品管理</div>
  <LyTable :Column="ProductColumn" :data="tableData"></LyTable>
  <!-- <LyForm :config="formConfig"></LyForm> -->
  <LyInput v-model="formData.name"></LyInput>
  {{ formData.name }}
</template>

<script setup lang="ts">
import { FormType } from '@/types/form'
import LyTable from '@/components/LyTable/index'
import LyInput from '@/components/LyForm/components/input'
// import LyForm from '@/components/LyForm/index'

import { ProductColumn } from './constant'
import { reactive, ref } from '@vue/reactivity'
const formData = reactive<any>({
  name: '',
})

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
  items: [
    {
      modal: 'input',
      name: 'title',
      label: 'title',
      defaultValue: '2000',
    },
  ],
  rules: [],
}
</script>

<style scoped>
</style>