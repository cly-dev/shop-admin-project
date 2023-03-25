<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-06 14:42:00
 * @Description:布局组件
-->
<template>
    <section class="layoutContainer">
        <div class="layoutHeader">
            <LySearch :search="handlePageChange" :formConfig="props.searchConfig?.formConfig" v-if="props?.searchConfig" >
                <div class="headerSlot">
                    <el-button v-if="props.addBtn" type="primary" :icon="Plus" @click="handleOpenModal" >新增</el-button>
                    <slot name="header"></slot>
                </div>
            </LySearch>
        </div>
        <div class="layoutMainer">
            <LyTable :showPage="false" :Column="props.tableConfig.Column" :showSearch="false" :data="tableData" :column="props.tableConfig.Column" :page="props.page" :size="props.size" v-if="props?.tableConfig"></LyTable>
        </div>
        <div class="layuoutFooter">
            <el-pagination
               hide-on-single-page
               background
               layout="sizes,prev, pager, next,  total"
               :total="1000"
               :current-page="page"
               @SizeChange="(v: number) => handlePageChange('size', v)"
               @CurrentChange="(v: number) => handlePageChange('page', v)"/>
        </div>
        <LyModal :modalId="modalId" v-if="props.modalConfig" :form-config="props.modalConfig?.formConfig" :title="props.modalConfig?.title" v-model:visible="visible" @finish="handleSubmit"></LyModal>
    </section>
</template>

<script setup lang="ts">
import {FormType} from "@/types/form";
import { Plus } from '@element-plus/icons-vue'
import {defineProps,ref,withDefaults,watch,computed} from "vue";
import {LayoutTypeMap} from "./type";

import LySearch from "../LySearch";
import LyTable from "../LyTable";
import LyModal from "../LyModal/index.vue";
interface Props{
        title:string
        searchConfig?:FormType.SearchConfig,
        tableConfig:LayoutTypeMap.tableConfig,
        modalConfig?:{
          formConfig:FormType.FormConfig,
          title?:string
        },
        onAdd?:Function,
        search:Function,
        update?:Function,
        delete?:Function,
        insert?:Function,
        page?:number,
        size?:number,
        addBtn?:boolean
} 
const props=withDefaults(defineProps<Props>(),{
    search:()=>{},
    addBtn:true
  }
)

const emit=defineEmits(["add",'search'])

const params = ref<any>({
  page: 1,
  size: 10,
})
const modalId=ref<any>('');
const page=ref<number>(1);
const visible=ref<boolean>(false);
const tableData=computed(()=>{
  return props.tableConfig.data.map((item:any)=>{
    const openModal=(v:string)=>{
      visible.value=true;
      modalId.value=v;
    }
    return Object.assign(item,{openModal})
  })
})
watch(visible,(newV:boolean,oldV:boolean)=>{
  console.log(newV)
})
const handleOpenModal=()=>{
  if(props.onAdd){
    props.onAdd();
    return;
  }
  emit("add");
  visible.value=true
}
const handlePageChange = (type?: 'page' | 'size' | any, v?: any) => {
    if (type === 'page' || type === 'size') {
      if(type==='page'){
        page.value=v;
      }
      Object.assign(params.value, { [type]: v })
    }else{
      page.value=1
     Object.assign(params.value, {...type,page:1})
    }
    props?.search && props?.search?.(params.value)
    emit("search",params.value)

  }
const handleSubmit=(v:string)=>{
  console.log(v);
}
</script>

<style lang="scss" scoped>
 @import "./index.scss";
</style>