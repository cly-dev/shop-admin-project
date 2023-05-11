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
               <LyFormBox title="媒体信息" >
                    <template #default>
                        <LyForm :config="mediaForm" ref="mediaFormRef">
                        </LyForm>
                    </template>
                </LyFormBox>
               
            </el-col> 
            <el-col :span="12" class="mt20" >
                <LyFormBox title="基本参数">
                  <template #default>
                        <LyForm :config="seriverForm" ref="seriverFormRef">
                        </LyForm>
                    </template>
                </LyFormBox>
            </el-col>
            <el-col :span="12" class="mt20">
                <SEOForm ref="seoFormRef"></SEOForm>
            </el-col>
            <el-col :span="12" class="mt20">
                <LyFormBox title="详细参数">
                  <template #headerRight>
                      <el-button styles="font-size:12px" type="primary" link @click="handleAdd">新增细节</el-button>
                  </template>
                <LyFormList :defaultValue="custom" ref="formListRef"></LyFormList>
                </LyFormBox>
            </el-col>
           
        </el-row>
        
    </div>
    </div>
</template>

<script setup lang="ts">
import {useRoute,useRouter} from "vue-router";
import { onMounted, reactive, ref, watch } from "vue";

import LyHeader from "@/components/LyHeader/index.vue";
import LyFormBox from "@/components/LyFormBox/index.vue";
import LyForm from "@/components/LyForm";
import LyFormList from "@/components/LyFormList/index.vue";
import SEOForm from "../../components/Common/SEOForm/index.vue";

import {getCategoryTree} from "@/api/category";
import {createItem,getItemDetail,updateItem} from "@/api/product";
import { ElMessage } from "element-plus";
const router=useRouter();
const route=useRoute();
const baseFormRef=ref<any>(null);
const options=ref<any>([]);
const seriverFormRef=ref<any>(null);
const seoFormRef=ref<any>(null);
const mediaFormRef=ref<any>(null);
const formListRef=ref<any>(null);
const freightAble=ref<boolean>(false);
const custom=ref<any>([]);
const hasId=ref<boolean>(false);
const formConfig=reactive({
    items: [
        {
          modal: 'input',
          name: 'productTitle',
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
          modal: 'cascader',
          name: 'categoryId',
          label: '类目',
          span:24,
          required:true,
          options,
          custom:{
            clearable:true,
          }
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
          name: 'discountPrice',
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
})
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
          name: 'mediaList',
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
          name: 'videoSrc',
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
          name: 'brand',
          label: '品牌',
          span:12,
          custom:{
            limit:9,
            multiple:true,
            maxLength:30
          }
        },
         {
          modal: 'cascader',
          name: 'address',
          label: '产地',
          span:12,
          options:[
            {
              label:'广东',
              value:'广东',
              children:[
                {
                  label:'揭阳',
                  value:'揭阳'
                }, {
                  label:'汕头',
                  value:'汕头'
                },{
                  label:'深圳',
                  value:'深圳',
                },{
                  label:'广州',
                  value:'广州',
                },{
                  label:'东莞',
                  value:'东莞'
                }
              ]
            },{
               label:'浙江',
                value:'浙江',
                children:[
                {
                  label:'宁波',
                  value:'宁波'
                }, {
                  label:'杭州',
                  value:'杭州'
                },{
                  label:'温州',
                  value:'温州',
                },{
                  label:'绍兴',
                  value:'绍兴',
                }
              ]
            }
          ],
          custom:{
            limit:9,
            multiple:true,
            maxLength:30
          }
        },
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
  const baseValid=baseFormRef.value.validate()
  const mediaValid=mediaFormRef.value.validate();
  const seriveValid=seriverFormRef.value.validate();
  if(formListRef.value.handleValite()){
  Promise.all([baseValid,mediaValid,seriveValid, seoFormRef.value.validate()]).then(([baseData,mediaData,serviceData,seoData])=>{
   const media:any={};
    Object.keys(mediaData).forEach((item:any)=>{
      if(mediaData[item] && mediaData[item].length > 0){
      if(item==='imageUrl' || item==='videoSrc'){
        media[item]=mediaData[item]['0']['url'];
       }else{
       media[item]=mediaData[item].map((doc:any)=>{
          return doc.url;
        })
      }
    }
    })
    const customList=formListRef.value.getFormData()
    const params={...baseData,...serviceData,...seoData,...media,custom:customList}
    if(baseData.categoryId){
      Object.assign(params,{categoryId:params.categoryId[params.categoryId.length - 1]})
    }
    if(!params?.mediaList){
      Object.assign(params,{mediaList:[]})
    }
    if(!params?.videoSrc){
      Object.assign(params,{videoSrc:''})
    }
    if(hasId.value){
      Object.assign(params,{id:route.params.id})
    }
    const api=hasId.value?updateItem:createItem;
       api(params).then((res:any)=>{
          ElMessage.success("保存成功");
          router.push('/home/product/list')
       })
        
  }).catch((err)=>{
    console.log(err)
    ElMessage.warning("请检查是否填写完整")
  })
  }
  
 

}
watch(()=>route.params,(newV:any)=>{
  console.log(newV);
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
    getItemDetail(route.params.id as string).then((res:any)=>{
     const mediaData={
      imageUrl:res.imageUrl?[{
          uid:Math.ceil(Math.random() * 100000000),
          url:res.imageUrl
        }]:[],
      mediaList:res.mediaList?res.mediaList.map((item:any)=>{
        return ({
           uid:Math.ceil(Math.random() * 100000000),
          url:item
        })
      }):[],
      videoSrc:res.videoSrc?[{
          uid:Math.ceil(Math.random() * 100000000),
          url:res.videoSrc
        }]:[]
     }
      baseFormRef.value.setFieldValue(res);
      seoFormRef.value.setFieldValue(res);
      seriverFormRef.value.setFieldValue(res);
      mediaFormRef.value.setFieldValue(mediaData);
      custom.value=res.custom
    })
  }
})
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>