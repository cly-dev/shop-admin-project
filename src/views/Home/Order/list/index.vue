<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:22:34
 * @Description: 商品管理
-->
<template>
  <!-- <LyTable
    :Column="ProductColumn"
    :data="tableData"
    :searchConfig="searchConfig"
    :search="handleSearch"
  >
  </LyTable> -->
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="正在进行" name="first">
      <ProcessingLayout></ProcessingLayout>
    </el-tab-pane>
    <el-tab-pane label="售后服务" name="second">
      <ReturnLayout></ReturnLayout>
    </el-tab-pane>

  </el-tabs>

  
</template>

<script setup lang="ts">
import { FormType } from '@/types/form'
import {useRouter} from "vue-router";
import ProcessingLayout from "../../components/Order/ProcessingLayout/index.vue"
import ReturnLayout from "../../components/Order/ReturnLayout/index.vue"
import { ref } from 'vue';
const router=useRouter();
const activeName=ref<'first' | 'second'>("first")
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