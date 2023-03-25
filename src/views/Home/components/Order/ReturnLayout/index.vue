<template>
    <LyLayout :onAdd="handleAdd" :modalConfig="modalConfig" title="商品管理" :search="handleSearch" :tableConfig="tableConfig" :searchConfig="searchConfig" :addBtn="false"> </LyLayout>
</template>

<script setup lang="ts">
import { FormType } from '@/types/form'
import {useRouter} from "vue-router";
import LyLayout from "@/components/LyLayout/index.vue";
import { tableConfig,searchConfig,modalConfig} from './constant'
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