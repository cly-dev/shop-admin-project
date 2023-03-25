<!--
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-13 15:42:12
 * @Description: 新增商品
-->
<template>
    <div class="productInfo">
    <div>
        <LyHeader link="/home/category/list" :title="`${!hasId?'增加':'修改'}类目`">
            <template #right>
                <el-button @click="handleSubmit">保存</el-button>
            </template>
        </LyHeader>
    </div>
    <div class="infoMainer">
        <el-row gutter="12">
            <el-col :span="12">
                <LyFormBox title="基础信息">
                    <template #default>
                        <LyForm :config="formConfig" ref="formRef">
                        </LyForm>
                    </template>
                </LyFormBox>
            </el-col>
            <el-col :span="12">
                <SEOForm></SEOForm>
            </el-col>
        </el-row>
        
    </div>
    </div>
</template>

<script setup lang="ts">
import LyHeader from "@/components/LyHeader/index.vue";
import LyFormBox from "@/components/LyFormBox/index.vue";
import LyForm from "@/components/LyForm";
import SEOForm from "../../components/Common/SEOForm/index.vue"
import {useRoute} from "vue-router";
import {  ref, watch } from "vue";
const route=useRoute();
const formListRef=ref<any>(null);
const hasId=ref<boolean>(false);
const formRef=ref<any>(null);
const formConfig={
    items: [
        {
          modal: 'input',
          name: 'name',
          label: '类目名称',
          span:24,
          required:true,
          custom:{
            maxlength:120,
            showWordLimit:true
          }
        },
        {
          modal: "cascader",
          name: 'paraentId',
          label: '关联类目',
          span:24,
          options: [
            {
              label: '1',
              value: 1,
              children:[{
                label:'2',
                value:'2'
              }]
            },  {
              label: '1',
              value: 1,
              children:[{
                label:'2',
                value:'2'
              }]
            },
          ],
          relevant:'level',
          onRelevant:(v:any)=>{
            if(v.length<1){
              return '一级';
            }else if(v.length==1){
              return '二级'
            }else{
              return '三级'
            }
          },
          custom:{
            clearable:true,
            props:{
              checkStrictly: true,

            }
          }
        },{
          modal: 'input',
          name: 'level',
          label: '类目级别',
          span:24,
          custom:{
            disabled:true,
          }
        },
        {
          modal: 'inputNumber',
          name: 'total',
          label: '类目排序',
          span:24,
          custom:{
            max:999999,
            min:1
          }
        },
         {
          modal: 'upload',
          name: 'imageList',
          type:'image',
          label: '封面图',
          span:24,
          required:true,
          custom:{
            limit:1,
            multiple:false
          }
        },
        {
          modal: 'upload',
          name: 'imageList',
          type:'image',
          label: '背景图',
          span:24,
          required:true,
          custom:{
            limit:1,
            multiple:true
          }
        },
        {
          modal: 'richText',
          name: 'desc',
          span:24,
          label: '类目描述',
        },
      ],
      rules: [],
}
const mediaForm={
    items: [
    {
          modal: 'upload',
          name: 'imageList',
          type:'image',
          label: '封面图',
          span:24,
          required:true,
          custom:{
            limit:1,
            multiple:false
          }
        },
        {
          modal: 'upload',
          name: 'imageList',
          type:'image',
          label: '背景图',
          span:24,
          required:true,
          custom:{
            limit:1,
            multiple:true
          }
        },
       
      ],
      rules: [],
}
const seriverForm={
  items: [
        { 
          modal: 'radio',
          name: 'imageList',
          type:'image',
          label: '赠送运费险',
          span:12,
          required:true,
          options:[
            {
              label:'是',
              value:true
            },{
              label:'否',
              value:false
            }
          ],
          custom:{
            limit:9,
            multiple:true
          }
        },
        {
          modal: 'radio',
          name: 'imageList',
          type:'image',
          label: '15天价保',
          span:12,
          required:true,
          options:[
            {
              label:'是',
              value:true
            },{
              label:'否',
              value:false
            }
          ],
          custom:{
            limit:9,
            multiple:true
          }
        },{
          modal: 'radio',
          name: 'imageList',
          type:'image',
          label: '包邮',
          span:12,
          required:true,
          options:[
            {
              label:'是',
              value:true
            },{
              label:'否',
              value:false
            }
          ],
          custom:{
            limit:9,
            multiple:true
          }
        },{
          modal: 'radio',
          name: 'imageList',
          type:'image',
          label: '过敏包退',
          span:12,
          required:true,
          options:[
            {
              label:'是',
              value:true
            },{
              label:'否',
              value:false
            }
          ],
          custom:{
            limit:9,
            multiple:true
          }
        },{
          modal: 'radio',
          name: 'imageList',
          type:'image',
          label: '七天无理由退换',
          span:12,
          required:true,
          options:[
            {
              label:'是',
              value:true
            },{
              label:'否',
              value:false
            }
          ],
          custom:{
            limit:9,
            multiple:true
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