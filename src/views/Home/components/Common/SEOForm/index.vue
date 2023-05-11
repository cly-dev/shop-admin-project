<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-01-18 13:47:54
 * @Description: SEO表单
-->
<template>
     <LyFormBox title="SEO信息">
        <LyForm :config="seriverForm" @FormChange="handleFormChange" ref='formRef'></LyForm>
        <div class="link">
            预览地址:
            <span class="url">
                {{webSite}}/{{formData.urlHandle}}
            </span>
        </div>
    </LyFormBox>
</template>

<script setup lang="ts">
import LyForm from "@/components/LyForm";
import LyFormBox from "@/components/LyFormBox/index.vue";
import {reactive,defineExpose,ref}  from "vue";
const webSite=process.env.VUE_APP_ENV_WEBSITE
const formRef=ref<any>(null)
const formData=reactive<{urlHandle?:string}>({
    urlHandle:''
});
const seriverForm={
  items: [
        {
          modal: 'input',
          name: 'seoTitle',
          label: 'SEO标题',
          span:24,
          required:true,
          custom:{
            maxlength:50,
            showWordLimit:true
          }
        },
        {
          modal: 'input',
          name: 'seoDesc',
          label: 'SEO描述',
          span:24,
          required:true,
          custom:{
            maxlength:120,
            showWordLimit:true
          }
        },{
          modal: 'input',
          name: 'seoUrl',
          label: 'SEO链接',
          span:24,
          required:true,
          custom:{
            maxlength:50,
            showWordLimit:true
          }
        },
      ],
  rules: [],
}
defineExpose({
  validate:async ()=>{
    return await formRef.value.validate()
  },
  setFieldValue:(v:any)=>{
    formRef.value.setFieldValue(v);
  }

})
const handleFormChange=(data:any)=>{
    console.log(data);
    Object.assign(formData,data);
}

</script>

<style scoped lang="scss">
    .link{
        font-size: 13px;
        color: #666;
        margin-left: 10px;
    }
    .url{
        margin-left: 15px;
    }
</style>