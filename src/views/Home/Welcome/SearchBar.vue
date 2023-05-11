<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-04-06 23:56:54
 * @Description: 
-->
<template>
   <el-input placeholder="请输入" v-model="data.value"></el-input>
   <el-input v-model="data.num" type="number" placeholder="请输入"></el-input>
</template>

<script setup lang="ts">import { computed } from 'vue';
import useVModel from "@/hooks/useVModel";
    const props=defineProps({
        modelValue:{
            type:Object,
            required:true
        }
    })
    console.log(props)
    const emit=defineEmits(['update:modelValue']);
    //通过计算属性 + Proxy可以实现单项数据流变化
    const data=useVModel(props,'modelValue',emit)
</script>

<style scoped>

</style>