<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-01-19 23:59:12
 * @Description: 富文本组件
-->
<template>
    <div class="richTextBox">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            mode="simple"
        />
        <Editor
            style="height: 300px; overflow-y: hidden;"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :editor="editorRef"
            mode="simple"
            @onCreated="handleCreated"
            @onChange="handleChange"
        />
    </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import {onBeforeMount,defineProps,defineEmits, shallowRef, ref, watch} from "vue";
type Props={
    modelValue?:''
};
const editorRef = shallowRef()
const valueHtml = ref('')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
const emit=defineEmits(['update:modelValue']);
const props=withDefaults(defineProps<Props>(),{

})


const handleCreated = (editor:any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
    }
const handleChange=(v:any)=>{
    console.log(typeof valueHtml.value)
    emit("update:modelValue",valueHtml.value)
}
watch(()=>props.modelValue,(v:any)=>{
    valueHtml.value=v;
})
onBeforeMount(()=>{
    if(editorRef.value){
        editorRef.value.destroy();
        editorRef.value = null;
    }
})
</script>

<style scoped lang="scss">
    .richTextBox{
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid rgb(208, 208, 208);
    }
</style>