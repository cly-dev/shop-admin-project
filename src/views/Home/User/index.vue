<!--
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-12 16:04:45
 * @Description: 客户管理
-->
<template>
    <LyLayout :table-config="tableConfig" title="客户管理" :search-config="searchConfig"></LyLayout>
    <UserInfo :visiable="observer.visible" @close="handleClose" :id="observer.id"></UserInfo>
   
</template>

<script setup lang="ts">
import {UserInfo} from "./components";
import {tableConfig,searchConfig} from "./constant";
import LyLayout from "@/components/LyLayout/index.vue";
import  {observer} from "./context";

const handleClose=()=>{
    observer.visible=false;
}

</script>

<style scoped>

</style>