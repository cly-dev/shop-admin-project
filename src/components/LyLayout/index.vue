<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-06 14:42:00
 * @Description:布局组件
-->
<template>
    <section class="layoutContainer">
        <div class="layoutHeader">
            <LySearch :search="handleFormChange" :formConfig="props.searchConfig?.formConfig" v-if="props?.searchConfig" >
                <div class="headerSlot">
                    <slot name="header"></slot>
                    <el-button v-if="props.addBtn" type="primary" :icon="Plus" @click="handleOpenModal" >新增</el-button>
                </div>
            </LySearch>
        </div>
        <div class="layoutMainer" v-loading="props.loading">
            <LyTable  :tableConfig="props.tableConfig"  :column="props.column" :showSearch="false" :data="tableData"  :page="props.page" :size="props.size" ></LyTable>
        </div>

        <div class="layuoutFooter" v-if="props.showPage">
            <el-pagination
               hide-on-single-page
               background
               layout="sizes,prev, pager, next,  total"
               :total="props.total"
               :current-page="params.page"
               @SizeChange="(v: number) => handlePageChange('size', v)"
               @CurrentChange="(v: number) => handlePageChange('page', v)"/>
        </div>
        <LyModal :modalId="modalId" v-if="props.modalConfig" :form-config="props.modalConfig?.formConfig" :title="props.modalConfig?.title" v-model:visible="visible" @finish="handleSubmit"></LyModal>
    </section>
</template>

<script setup lang="ts">
import {ElTable} from "element-plus";
import {FormType} from "@/types/form";
import { Plus } from '@element-plus/icons-vue'
import {defineProps,ref,withDefaults,computed,onMounted} from "vue";

import LySearch from "../LySearch";
import LyTable from "../LyTable";
import LyModal from "../LyModal/index.vue";
interface Props{
        loading?:boolean
        title:string
        searchConfig?:FormType.SearchConfig,
        column:TableType.ColumnType[],
        tableData:any[]
        total?:number
        tableConfig?:{
        [key in keyof typeof ElTable]?: (typeof ElTable)[key]
        }
        modalConfig?:{
          formConfig:FormType.FormConfig,
          title?:string
        },
        showPage?:boolean
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
    addBtn:true,
    showPage:true,
    loading:false
  }
)
const emit=defineEmits(["add",'search'])

const params = ref<any>({
  page: 1,
  size: 10,
})
const formData=ref<any>({});
const modalId=ref<any>('');
const visible=ref<boolean>(false);
const tableData=computed(()=>{
  return props.tableData.map((item:any)=>{
    const openModal=(v:string)=>{
      visible.value=true;
      modalId.value=v;
    }
    return Object.assign(item,{openModal})
  })
})
const handleOpenModal=()=>{
  if(props.onAdd){
    props.onAdd();
    return;
  }
  emit("add");
  visible.value=true
}
const handleFormChange=(v:any)=>{
  formData.value=v;
  params.page=1;
  emit("search",{...v,...params.value})
}
const handlePageChange =  (type?: 'page' | 'size' | any, v?: any) => {
    params.value[type]=v;
    emit("search",{...params.value,...formData.value})
  }
const handleSubmit=(v:string)=>{
  console.log(v);
}
onMounted(()=>{
    emit("search",params.value)
 
})

</script>

<style lang="scss" scoped>
 @import "./index.scss";
</style>