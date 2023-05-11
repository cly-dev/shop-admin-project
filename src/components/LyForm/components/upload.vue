<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-12-19 21:56:17
 * @Description: 上传组件
-->
<template>
     <el-upload
        v-model:file-list="fileList"
        action="/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :before-upload="handleBeforeUpload"
        :accept="props.type==='image' && '.png,.jpg'|| props.type==='video' && '.mp4,.mov' || ''"
        :limit="props.limit"
        :multiple="props.multiple"
        :http-request="customUpload"
        @success="handleSuccess"
        :disabled="props.disabled || fileList.length > props.limit"
        
    >
        <el-icon><Plus /></el-icon>
    </el-upload>
  <el-dialog   v-model="dialogVisible" style="width:800px;" >
    <img :src="dialogImageUrl" alt="Preview Image" class="imgBox" v-if="props.type==='image'" />
    <video controls  :src="dialogVisible? dialogImageUrl:''" v-else-if="props.type==='video'" ></video>
    <a download :href="dialogImageUrl"></a>
 </el-dialog>
</template>

<script setup lang="ts">
import { ref,defineProps,watch } from 'vue'
import {upload} from "@/api/public"
import { Plus } from '@element-plus/icons-vue';
import {ElUpload, UploadRequestOptions} from "element-plus"
import type { UploadProps, UploadUserFile,UploadRawFile } from 'element-plus';
import {checkMedioType} from "@/untils/checkFile";
type Props={
    type?:'image' | 'video' | 'file',
    modelValue?:any,
    size?:number
    limit?:number,
    multiple?:boolean,
    disabled?:boolean
}

const props=withDefaults(defineProps<Props>(),{
    size:5,
    limit:1
})
const emit=defineEmits(['update:modelValue'])
const fileList = ref<UploadUserFile[]>([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const handleBeforeUpload=(rawFile: UploadRawFile)=>{
  const {name,size}=rawFile;
    if(props.type==='image' || props.type==='video'){
      return checkMedioType(props.type,name);
    }
    return size / 1024 / 1024 <=props.size;
} 
const handleSuccess=(res:any)=>{
  console.log(fileList)
  const {uid,url}=res;
  const data: any[]=[];
  fileList.value.forEach((item:any)=>{
    if(item.uid===uid){
      item.url=url;
    }
  })
  emit("update:modelValue",fileList.value)
}
const customUpload=async(options:UploadRequestOptions):Promise<any>=>{
    const formData=new FormData();
    formData.append("file",options.file);
    return {
      ...options.file,
      url:await upload(formData)
      
    }
}

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile);
  emit("update:modelValue",uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

// watch(()=>fileList.value,(newV:any)=>{
//   console.log(fileList.value);
//     console.log("我是上传数据")
//   emit("update:modelValue",newV);
// })
watch(()=>props.modelValue,(newV:any)=>{
  console.log(newV);
  console.log("默认值")
  if(newV && Array.isArray(newV)){
      fileList.value=newV.map((item:any)=>{
        return ({
           uid:Math.ceil(Math.random() * 1000000000),
            status:'success',
            ...item,
        })
      })
  } 
})
</script>

<style lang="scss" scoped>
.imgBox{
  max-width:400px;
  max-height: 400px;
  
}
</style>