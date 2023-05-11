<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:22:34
 * @Description: 类目管理
-->
<template>
  <LyLayout :loading="observerState.loading" :showPage="false" :tableConfig="{rowKey:'_id',
      }" :column="Column" :tableData="observerState.tree" @add="handleAdd" :modalConfig="modalConfig" title="类目管理" @search="getList"  :searchConfig="searchConfig"></LyLayout>
</template>

<script setup lang="ts">
import { observerState} from "../context"
import { FormType } from '@/types/form'
import {useRouter} from "vue-router";
import LyLayout from "@/components/LyLayout/index.vue";
import {Column,modalConfig,searchConfig,getList} from './constant';
const router=useRouter();
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
const handleAdd=()=>{
  router.push('/home/category/info')
}

</script>

<style scoped>
</style>