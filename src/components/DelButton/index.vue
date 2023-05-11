<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-04-25 01:31:28
 * @Description: 
-->
<template>
    <el-popconfirm title="确认删除?" @confirm={handleComfirm}>
        <template #reference>
            <el-button type='danger'>
                删除
            </el-button>
    </template>
  </el-popconfirm>
</template>

<script setup lang="ts">
    import {defineProps,defineEmit} from "vue";

    const emit=defineEmit(['ok']);
    const handleComfirm=()=>{
        emit('ok')
    }
</script>

<style scoped>

</style>