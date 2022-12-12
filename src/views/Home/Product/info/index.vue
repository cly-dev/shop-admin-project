<!--
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-13 15:42:12
 * @Description: 新增商品
-->
<template>
    <div class="productInfo">
    <div>
        <LyHeader link="/home/product/list" :title="`${!hasId?'增加':'修改'}商品`">
            <template #right>
                <el-button>保存</el-button>
            </template>
        </LyHeader>
    </div>
    <div class="infoMainer">
        <el-row gutter="12">
            <el-col :span="12">
                <LyFormBox title="基础信息">
                    <template #default>
                        <LyForm :config="formConfig">
                        </LyForm>
                    </template>
                </LyFormBox>
            </el-col>
            <el-col :span="12">
                <LyFormBox title="媒体信息"></LyFormBox>
            </el-col>
            <el-col :span="12" class="mt20">
                <LyFormBox title="详细参数">
                  <template #headerRight>
                      <el-button styles="font-size:12px" type="primary" link @click="handleAdd">新增细节</el-button>
                  </template>
                <LyFormList :defaultValue="[{label:'1',value:'1'},{label:'2',value:'1'},{label:'3',value:'1'},{label:'4',value:'1'}]" ref="formListRef"></LyFormList>
                </LyFormBox>
            </el-col>
            <el-col :span="12" class="mt20">
                <LyFormBox title="保障服务"></LyFormBox>
            </el-col> 
           
        </el-row>
        
    </div>
    </div>
</template>

<script setup lang="ts">
import LyHeader from "@/components/LyHeader/index.vue";
import LyFormBox from "@/components/LyFormBox/index.vue";
import LyForm from "@/components/LyForm";
import LyFormList from "@/components/LyFormList/index.vue";
import {useRoute} from "vue-router";
import { ref, watch } from "vue";
const route=useRoute();
const formListRef=ref<any>(null);
const hasId=ref<boolean>(false);
const formConfig={
    items: [
        {
          modal: 'input',
          name: 'name',
          label: '名称',
          span:24,
          required:true,
          defaultValue: '2000',
          custom:{
            maxlength:50,
            showWordLimit:true
          }
        },
        {
          modal: 'select',
          name: 'category',
          label: '类目',
          span:24,
          required:true,
          options: [
            {
              label: '1',
              value: 1,
            },
          ],
        },
        {
          modal: 'inputNumber',
          name: 'total',
          required:true,
          label: '库存',
          span:24,
          custom:{
            max:999999,
            min:1
          }
        },
        {
          modal: 'inputNumber',
          name: 'price',
          label: '售价',
          span:12,
          required:true,
          custom:{
            max:999999,
            min:0.1
          }
        },
        {
          modal: 'inputNumber',
          name: 'originPrice',
          span:12,
          label: '原价',
          custom:{
            max:999999,
            min:0
          }
        },
        {
          modal: 'input',
          type:'textarea',
          name: 'desc',
          span:24,
          label: '描述',
          custom:{
            maxlength:1000,
            showWordLimit:true
          }
        },
      ],
      rules: [],
}
const handleAdd=()=>{
  formListRef.value.handleAdd();
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