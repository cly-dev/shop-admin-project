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
                <SEOForm ref="mediaRef"></SEOForm>
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
import {getCategoryTree,createCategory, getCategoryDeatail,updateCategory} from "@/api/category"
import {useRoute} from "vue-router";
import {  onMounted, ref, watch,reactive} from "vue";
import { ElMessage } from "element-plus";
import router from "@/router";
const route=useRoute();
const options=ref<any>([]);
const formListRef=ref<any>(null);
const hasId=ref<boolean>(false);
const mediaRef=ref<any>(null);
const formRef=ref<any>(null);
const formConfig=reactive({
    items: [
        {
          modal: 'input',
          name: 'title',
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
          name: 'parentId',
          label: '关联类目',
          span:24,
          options,
          relevant:'level',
          onRelevant:(v:any)=>{
            if(Array.isArray(v)){
            if(v.length<1){
              return '1';
            }else if(v.length==1){
              return '2'
            }else{
              return '3'
            }
          }else{
            return '1'
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
          name: 'sortValue',
          label: '类目排序',
          span:24,
          custom:{
            max:999999,
            min:1
          }
        },
         {
          modal: 'upload',
          name: 'iconUrl',
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
          modal: 'richText',
          name: 'desc',
          span:24,
          label: '类目描述',
        },
      ],
      rules: [],
})

const handleAdd=()=>{
  formListRef.value.handleAdd();
}
const handleSubmit=async()=>{
  const seoData=await mediaRef.value.validate()
  if(seoData){
   formRef.value.validate().then((res: any)=>{
    Object.keys(res).forEach((item:string)=>{
        const data=res[item]
        if(data){
          if(item==='iconUrl'){
            res[item]=data[0]['url'];
          }
           if(item==='parentId' && Array.isArray(data)){
              res[item]=data[data.length - 1];
           }
      }else{
        if(item==='parentId'){
          res[item]='0';
        }
      } 
  })
  const params={...res,seoDesc:seoData.seoDesc,seoTitle:seoData.seoTitle,seoUrl:seoData.seoUrl,};
  console.log(params);
  console.log("数据")
  if(hasId.value){
    Object.assign(params,{id:route.params.id})
    updateCategory(params).then(()=>{
      ElMessage.success("修改成功")
      router.push("/home/category/list")

    })
  }else{
    createCategory(params).then(()=>{
      ElMessage.success("创建成功");
      router.push("/home/category/list")
    })
  }
   })
  }
}
watch(()=>route.params,(newV:any)=>{
  hasId.value=newV?.id?true:false
},{
  immediate:true
})
onMounted(() => {
  getCategoryTree().then((res:any)=>{
    function formatTree(arr:any[]):any{
        let list=[];
          if(!arr ||arr.length===0){
            return []
          }      
      list= arr.map((item:any)=>{
          return {
            label:item.categoryTitle,
            value:item._id,
            children: formatTree(item?.children || [])
          }
        })
        return list
    }
    options.value=formatTree(res);
  })
  if(route.params.id){
    getCategoryDeatail(route.params.id as string).then((doc:any)=>{
    const formData=doc;
    if(formData.iconUrl){
      Object.assign(formData,{iconUrl:[{
          uid:Math.ceil(Math.random() * 100000000),
          url:formData.iconUrl
        }]})
    }
      formRef.value.setFieldValue({...doc,title:doc.categoryTitle})
      mediaRef.value.setFieldValue(doc)
    })
  }
})

</script>

<style scoped lang="scss">
@import "./index.scss"
</style>