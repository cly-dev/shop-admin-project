<!--
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-13 15:42:12
 * @Description: 内容配置
-->
<template>
    <div class="productInfo">
    <div>
        <LyHeader link="/home/config/list" :title="`${!hasId?'增加':'修改'}配置`">
            <template #right>
                <el-button @click="handleSubmit">保存</el-button>
            </template>
        </LyHeader>
    </div>
    <div class="infoMainer">
        <el-row gutter="12">
            <el-col :span="16">
                <LyForm :config="formConfig" ref="formRef" >
                  </LyForm>
            </el-col>
        </el-row>
    </div>
    </div>
</template>

<script setup lang="ts">
import {useRoute,useRouter} from "vue-router";
import {  ref, watch,reactive, onMounted} from "vue";
import LyHeader from "@/components/LyHeader/index.vue";
import LyForm from "@/components/LyForm";
import {getCategoryList} from "@/api/category";
import {createConfig, getConfigDetail} from "@/api/shop"
import { getItemList} from "@/api/product";
import { ElMessage } from "element-plus";
import { updateConfig } from "@/api/shop";
const route=useRoute();
const router=useRouter();
const formListRef=ref<any>(null);
const hasId=ref<boolean>(false);
const formRef=ref<any>(null);
const categoryOptions=ref([]);
const productOptions=ref([]);
const  location=ref<string>(route.params?.type as string || route.query?.type as string);
const formConfig=reactive({
    items: [
        {
          modal: 'input',
          name: 'configTitle',
          label: '名称',
          span:24,
          required:true,
          custom:{
            maxlength:120,
            showWordLimit:true,
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
          modal: "select",
          name: 'itemId',
          label: '类目',
          span:24,
          hiddenItem:['notice','product','banner',''].includes(location.value as any),
          options: categoryOptions,
          custom:{
            clearable:true,
          }
        },
        {
          modal: "select",
          name: 'itemId',
          label: '商品',
          span:24,
          hiddenItem:['notice','category','hotCategory','activity',''].includes(location.value as any),
          options: productOptions,
          custom:{
            clearable:true,
            filterable:true
          }
        },
        {
          modal: 'inputNumber',
          name: 'sortValue',
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
    
})
const handleAdd=()=>{
  formListRef.value.handleAdd();
}
const handleSubmit=async()=>{
 const params=await formRef.value.validate()
 if(params.imageUrl && params.imageUrl.length){
  Object.assign(params,{imageUrl:params.imageUrl[0]['url']})
 }
 Object.assign(params,{location:location.value})
 if(route.params?.id){
  Object.assign(params,{id:route.params?.id})
 }
 const api=route.params?.id?updateConfig:createConfig;
 api(params).then((res:any)=>{
    ElMessage.success('保存成功');
    router.push('/home/config/list')
 })
}
onMounted(() => {
    const data={page:1,size:20,status:'0'}
  if(route.query?.type && route.query?.type==='category'){
    Object.assign(data,{level:'1'});
  }else{
    Object.assign(data,{level:'2'});
  }
  getCategoryList(data).then(({list}:any)=>{
   categoryOptions.value=list.map((item:any)=>({
    value:item._id,
    label:item.categoryTitle
   }))
  })
  getItemList({size:9999,page:1,status:'0'}).then(({list}:any)=>{
   productOptions.value=list.map((item:any)=>({
    value:item._id,
    label:item.productTitle
   }))
  })
  if(route.params?.id){
      getConfigDetail(route.params?.id as string).then((doc:any)=>{
        if(doc.imageUrl){
          Object.assign(doc,{imageUrl:[ {
          uid:Math.ceil(Math.random() * 100000000),
          url:doc.imageUrl
        }]})
        }
        location.value=doc.location;
        formRef.value.setFieldValue(doc);
    })
  }
})

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