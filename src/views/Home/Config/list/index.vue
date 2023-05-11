<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-02-08 21:43:52
 * @Description: 内容配置列表
-->
<template>
    <LyLayout :column="tableConfig.Column" :tableData="observerState.data.list" :total="observerState.data.total" :loading="observerState.loading"  :onAdd="handleAdd" :modalConfig="modalConfig" title="商品管理" @search="search"  :searchConfig="searchConfig" :addBtn="false" >
      <template #header>
          <el-dropdown>
      <el-button type="primary">
        新增<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="()=>handleChange(item.value)" v-for="item in tools" :key="item.value">{{ item.label }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
      </template>
    </LyLayout>
  </template>
  
  <script setup lang="ts">
  import {ArrowDown } from "@element-plus/icons-vue"
  import { FormType } from '@/types/form'
  import {useRouter} from "vue-router";
  import LyLayout from "@/components/LyLayout/index.vue";
  import { tableConfig,searchConfig,modalConfig} from '../constant'
  import {search} from "../useConfig";
  import {observerState} from '../context';
  const router=useRouter()
  const tools=[{
      label:'公告',
      value:'notice',
  },{
    label:'轮播图',
    value:'banner'
  },{
    label:'类目推荐',
    value:'category'
  },{
    label:'热门类目',
    value:'hotCategory',
  },{
    label:'商品推荐',
    value:'product',
  },{
    label:'活动浮窗',
    value:'activity'
  }]
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
  const handleChange=(v:any)=>{
    console.log(v);
    router.push(`/home/config/info/${v}`)
  }
  const handleClick = (data: any) => {
    console.log(data)

  }
  const handleAdd=()=>{
    router.push('/home/config/info')
  }
  const handleSearch = (params?: any) => {
    console.log(params)
    console.log('-----------=--------')
  }
  </script>
  
<style scoped>

</style>