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
                <el-button @click="handleSubmit">保存</el-button>
            </template>
        </LyHeader>
    </div>
    <div class="infoMainer">
        <el-row gutter="12">
            <el-col :span="12">
                <LyFormBox title="基础信息">
                    <template #default>
                        <LyForm :config="formConfig"  ref="baseFormRef">
                        </LyForm>
                    </template>
                </LyFormBox>
            </el-col>
            
            <el-col :span="12"  >
                <LyFormBox title="基本参数">
                  <template #default>
                        <LyForm :config="seriverForm" ref="seriverFormRef">
                        </LyForm>
                    </template>
                </LyFormBox>
            </el-col> 
            <el-col :span="12" class="mt20" >
                <LyFormBox title="媒体信息" >
                    <template #default>
                        <LyForm :config="mediaForm" ref="mediaFormRef">
                        </LyForm>
                    </template>
                </LyFormBox>
            </el-col>
            <el-col :span="12" class="mt20">
                <SEOForm></SEOForm>
            </el-col>
            <el-col :span="12" class="mt20">
                <LyFormBox title="详细参数">
                  <template #headerRight>
                      <el-button styles="font-size:12px" type="primary" link @click="handleAdd">新增细节</el-button>
                  </template>
                <LyFormList :defaultValue="[{label:'1',value:'1'},{label:'2',value:'1'},{label:'3',value:'1'},{label:'4',value:'1'}]" ref="formListRef"></LyFormList>
                </LyFormBox>
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
import SEOForm from "../../components/Common/SEOForm/index.vue"
import {useRoute} from "vue-router";
import { ref, watch } from "vue";
const route=useRoute();
const baseFormRef=ref<any>(null);
const seriverFormRef=ref<any>(null);
const mediaFormRef=ref<any>(null);
const formListRef=ref<any>(null);
const freightAble=ref<boolean>(false);
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
          modal: 'richText',
          name: 'desc',
          span:24,
          label: '描述',
         
        },
      ],
      rules: [],
}
const mediaForm={
    items: [
    {
          modal: 'upload',
          name: 'imageUrl',
          type:'image',
          label: '主图 ',
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
          label: '图片',
          span:24,
          custom:{
            limit:9,
            multiple:true
          }
        },
        {
          modal: 'upload',
          name: 'videoList',
          label: '视频',
          type:'video',
          span:24,
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
          modal: 'input',
          name: 'color',
          label: '颜色',
          span:12,
          custom:{
            limit:9,
            multiple:true,
            maxLength:30
          }
        },
        {
          modal: 'input',
          name: 'location',
          label: '涂抹位置',
          span:12,
          custom:{
            maxLength:30,

          }
        },
        {
          modal: 'inputNumber',
          name: 'freight',
          label: '运费',
          span:12,
          custom:{
            maxLength:30,
            disabled:freightAble.value,
            min:1,
            max:9999
          }
        },
        {
          modal: 'radio',
          name: 'freightInspection',
          label: '赠送运费险',
          span:12,
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
          name: 'priceEnsure',
          label: '15天价保',
          span:12,
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
          name: 'allergyTurn',
          label: '过敏包退',
          span:12,
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
          name: 'notReason',
          label: '七天无理由退换',
          span:12,
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
  console.log(baseFormRef.value);
  const baseValid=baseFormRef.value.validate()
  const mediaValid=mediaFormRef.value.validate();
  const seriveValid=seriverFormRef.value.validate();
  
  Promise.all([baseValid,mediaValid,seriveValid]).then(([...args])=>{
    console.log(args);
  })
 

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