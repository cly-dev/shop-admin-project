<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-12-11 18:22:56
 * @Description: 表单列表
-->
<template>
    <div class="lyFromList">
       <ul class="listContent">
            <li v-for="(item,index) in formList" :key="item.key" :draggable="dragAble" :class="`listItem ${drag.active===item.key &&(drag.index <index?'dragAfter':'dragBefore')}`"   @dragleave="()=>handleDragLeave(item.key,index)" @dragend="(e:any)=>handleDragEnd(e,item.key,index)"  @dragenter="()=>handleDragEnter(item.key)" @dragstart="()=>handleDragStart(item.key,index)" @dragover="(e:DragEvent)=>{
                e.preventDefault()
            }">
                <div class="itemContent">
                    <el-icon  class="locationIcon"><Sort /></el-icon>
                    <el-tooltip
                            :popper-class="labelErrList.includes(item.key)?'showTips':'box-item'"
                            content="该项为必填项"
                            placement="top-start"
                            effect="customized"
                        >
                        <el-input type="text" maxLength="50" :show-word-limit="true" placeholder="请输入参数名" v-model="item.label" :class="labelErrList.includes(item.key) && 'errStyle'"></el-input>
                    </el-tooltip>
                    <span class="itemTips">:</span>
                    <el-tooltip
                            :popper-class="valueErrList.includes(item.key)?'showTips':'box-item'"
                            content="该项为必填项"
                            placement="top-start"
                            effect="customized"
                        >
                        <el-input type="text" maxLength="150" :show-word-limit="true" placeholder="请输入参数值" v-model="item.value" :class="valueErrList.includes(item.key) && 'errStyle'"></el-input>
                    </el-tooltip> 
                    <el-icon draggable="false" class="deleteIcon" @click="()=>handleDelete(item.key)" ><Delete title="删除" /></el-icon>
                </div>

            </li>
       </ul>
    </div>
</template>

<script setup lang="ts">
import { reactive,defineExpose,ref,watch,nextTick} from 'vue';
import {Delete,Sort } from "@element-plus/icons-vue";
import {ElMessage} from "element-plus"
//TODO:全局插件添加消息函数
type Props={
    //最大条数
    total?:number
    //初始值
    defaultValue?:Array<{label:string,value:string}>
    //无法编辑
    disabled?:boolean
}
const props=withDefaults(defineProps<Props>(),{
    total:30,
})
const dragAble=ref<boolean>(true);
const formList=ref<Array<{label:string,value:string,key:string}>>([])
const labelErrList=reactive<Array<string>>([]);
const valueErrList=reactive<Array<string>>([]);
const drag=reactive<{start:string,active:string,end:string,index:number,endIndex:number}>({
    start:'',
    active:'',
    end:'',
    index:0,
    endIndex:0,
})
const handleAdd=()=>{
    if(formList.value.length>=props.total){
        ElMessage.warning(`属性值超出${props.total}条`);
        return;
        
    }
    const key=Math.ceil(Math.random() * 10000000000000)+'';
    formList.value.push({
        label:'',
        value:'',
        key
    })
}
const handleValite=()=>{
    formList.value.forEach((item:any)=>{
        labelErrList.forEach((v:any,index)=>{
            if(v===item.key && item.label){
                labelErrList.splice(index,1);
            }
        })
        valueErrList.forEach((v:any,index)=>{
            if(v===item.key && item.value){
                valueErrList.splice(index,1);
            }
        })
        if(!item.label && !labelErrList.includes(item.key)){
            labelErrList.push(item.key);
        }
        if(!item.value && !valueErrList.includes(item.key)){
            valueErrList.push(item.key)
        }
    })
    return labelErrList.length===0 && valueErrList.length===0;

}
const handleDelete=(key:string)=>{
    console.log(key)
    formList.value.forEach((item:any,index)=>{
        if(item.key===key){
            formList.value.splice(index,1);
        }
        labelErrList.forEach((item:any,index)=>{
            if(item===key){
                labelErrList.splice(index,1)
            }
        })
        valueErrList.forEach((item:any,index)=>{
            if(item===key){
                labelErrList.splice(index,1)
            }
        })
    })
}
const handleDragEnter=(key:string)=>{
    if(key!==drag.start){
        drag.active=key;
    }
}
const handleDragStart=(key:string,index:number)=>{
    drag.start=key;
    drag.index=index;
}
const handleDragEnd=(e:any,key:string,index:number)=>{
    e.preventDefault()
    if(drag.end===drag.start)return;
    const fieldIndex=formList.value.findIndex((item:any)=>item.key===drag.end);
    const oldField=formList.value[fieldIndex];
    const newField=formList.value[index];
    formList.value[fieldIndex]=newField;

    formList.value.splice(index,1);

    formList.value.splice(drag.index > drag.endIndex? fieldIndex + 1:fieldIndex - 1,0,oldField);
    nextTick(()=>{
        dragAble.value=true;
    })
    dragAble.value=false;
    drag.start='';
    drag.active='';
    drag.index=0
}
const handleDragLeave=(key:string,index:number)=>{
    drag.end=key
    drag.endIndex=index;
}
watch(()=>props.defaultValue,()=>{
    if(props.defaultValue){
    formList.value=props.defaultValue.map((item:any)=>{
    const key=Math.ceil(Math.random() * 10000000000000)+'';
    return {
            key,
            ...item
        }
    })
    }
},{
    immediate:true
})
watch(formList.value,()=>{
    handleValite();
})

defineExpose({
    handleAdd,
    handleDelete,
    handleValite,
    getFormData:()=>{
        return formList.value.map((item:any)=>({
            label:item.label,
            value:item.value
        }))
    }
})
</script>

<style  lang="scss">
        .box-item{
                display: none;
        }
        .showTips{
            display: block;
        }
        .errStyle{         
                .el-input__wrapper{
                    border: 1px solid red;
                            
                }
             .is-focus{
                    border: 1px solid red;
                     box-shadow: 0 0 0 0px red;
                }
         }
        .listContent
        .dragAfter{
            &::after{
                content:'';
                display: block;
                width: 100%;
                height: 5px;
                background-color:rgba($color: #1a88f7, $alpha: 0.6);
                margin: 5px 0px;
                border-radius: 5px;
            }
        }
        .dragBefore{
            &::before{
                content:'';
                display: block;
                width: 100%;
                height: 5px;
                background-color:rgba($color: #1a88f7, $alpha: 0.6);
                margin:5px 0;
                border-radius: 5px;
            }
        }
        .listItem{
            margin-bottom: 10px;
         
            .locationIcon{
                font-size: 20px;
                margin-right: 5px;
                cursor: pointer;
                &:hover{
                    cursor: grab;
                }
                &:active{
                    cursor: grabbing;
                }
            }
            .itemContent{
                display: flex;
                align-items: center;
                align-items: center;

            }
            .itemTips{
                margin:0 5px;
            }
            .deleteIcon{
                font-size: 20px;
                margin-left: 5px;
                cursor: pointer;
            }
        }
        // :class="drag.active===item.key && 'dragAfter'"
</style>