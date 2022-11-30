<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-11-06 21:46:16
 * @Description: 表单弹窗组件
-->
<template>
    <div>
        <el-dialog draggable width="600px" :title="props.modalId?'编辑':'新增' +props.title" :modelValue="props.visible" @update:modelValue="(v:boolean)=> emit('update:visible',v)" >
            <LyForm ref="formRef" :initValue="{title:1}"  :onFormChange="handleFormChange" :config="props.formConfig?.config" :options="props.formConfig?.options" ></LyForm>        
            <template #footer>
            <div class="dialog-footer">
                <el-button @click="()=>emit('update:visible',false)">退出</el-button>
                <el-button type="primary" @click="handleSubmit">
                    提交
                </el-button>
      </div>
    </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { FormType } from '@/types/form';
import { ElButton, ElDialog, } from 'element-plus';
import { markRaw, ref,watch,withDefaults } from 'vue';
import LyForm from '../LyForm';
interface Props{
    visible:boolean,
    title?:string,
    modalId?:string,
    formConfig?:FormType.FormConfig
}
const props=withDefaults(defineProps<Props>(),{
    visible:false
})
const emit=defineEmits(['update:visible','finish']);
const formRef=ref<any>();
const formData=ref<any>({})
const handleFormChange=(field:any)=>{
    formData.value=field;
}
const handleSubmit=()=>{
    if(!formRef.value)return;
    const formInstance=formRef.value.getFormInstance();
   formInstance.validate((valid:boolean, fields:any) => {
    if (valid) {
        emit("finish",{...markRaw(formData.value),id:props.modalId});
    } else {
      console.log('error submit!', fields)
    }})
}
const visible=ref<boolean>(false)
watch(()=>props.modalId,(newV:any)=>{
    console.log(newV)
})

</script>

<style scoped>

</style>