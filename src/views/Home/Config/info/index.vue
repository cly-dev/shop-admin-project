<!--
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-13 15:42:12
 * @Description: 内容配置
-->
<template>
    <div class="productInfo">
    <div>
        <LyHeader link="/home/category/list" :title="`${!hasId?'增加':'修改'}配置`">
            <template #right>
                <el-button @click="handleSubmit">保存</el-button>
            </template>
        </LyHeader>
    </div>
    <div class="infoMainer">
        <el-row gutter="12">
            <el-col :span="16">
                <LyForm :config="formConfig" ref="formRef">
                  </LyForm>
            </el-col>
        </el-row>
        
    </div>
    </div>
</template>

<script setup lang="ts">
import LyHeader from "@/components/LyHeader/index.vue";
import LyForm from "@/components/LyForm";
import {useRoute} from "vue-router";
import {  ref, watch } from "vue";
import {configMune} from "../constant"
const route=useRoute();
const formListRef=ref<any>(null);
const hasId=ref<boolean>(false);
const formRef=ref<any>(null);
const formConfig={
    items: [
        {
          modal: 'input',
          name: 'configTitle',
          label: '名称',
          span:24,
          required:true,
          custom:{
            maxlength:120,
            showWordLimit:true
          }
        },
        {
          modal: "select",
          name: 'location',
          label: '位置',
          span:24,
          options: configMune,
          required:true,
          custom:{
            clearable:true,
          }
        },
        {
          modal: 'upload',
          name: 'imageUrl',
          type:'image',
          label: '图片',
          span:24,
          custom:{
            limit:1,
            multiple:false
          }
        },
        {
          modal: 'inputNumber',
          name: 'total',
          label: '排序',
          span:12,
          custom:{
            max:999999,
            min:1
          }
        },
        {
          modal: 'input',
          type:'textarea',
          name: 'content',
          label: '内容',
          span:24,
        },
        
        {
          modal: "select",
          name: 'type',
          label: '类型',
          span:24,
          options: [{value:'1',label:'商品'},{label:'类目',value:'1'}],
          custom:{
            clearable:true,
          }
        },
        {
          modal: 'input',
          name: 'url',
          label: '链接',
          span:24,
          custom:{
            maxlength:120,
            showWordLimit:true
          }
        },
      ],
      rules: [],
}
const handleAdd=()=>{
  formListRef.value.handleAdd();
}
const handleSubmit=()=>{
  console.log(formRef.value.getFieldValues());
}
watch(()=>route.params,(newV:any)=>{
  console.log(newV);
  hasId.value=newV?.id?true:false
},{
  immediate:true
})


</script>

<style scoped lang="scss">
@import "./index.scss"
</style>