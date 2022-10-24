<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 22:17:14
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-23 23:10:31
 * @FilePath: \shop\src\components\LyForm\components\radio.vue
 * @Description: 单选
-->
<template>
  <el-radio-group @change="handleChange">
    <el-radio v-for="item in props?.options" :key="item?.name" {...item?.name}>
    </el-radio>
  </el-radio-group>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  options: {
    type: Array,
    default: [],
  },
})
const emit = defineEmits(['change'])

const handleChange = (v: any) => {
  emit('change', v)
}
</script>

<style scoped>
</style>