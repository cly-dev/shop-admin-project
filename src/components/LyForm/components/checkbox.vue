<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 22:17:14
 * @Description: 多选选择框
-->
<template>
  <el-checkbox-group @change="handleChange" v-model="model.modelValue">
    <el-checkbox v-for="item in props?.options" :key="item?.name">
    </el-checkbox>
  </el-checkbox-group>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import useVModel from '@/hooks/useVModel';
const props = withDefaults(
  defineProps<{ options: any; config?: any; modelValue: any }>(),
  {
    options: {
      type: Array,
      default: [],
    },
    config: {
      type: Object,
      default: {},
    },
    modelValue: {
      type: String,
      default: '',
    },
  }
)


const emit = defineEmits(['change', '@update：modelValue'])
const model=useVModel(props,'modelValue',emit);

const handleChange = (v: any) => {
  emit('change', v)
  emit('@update：modelValue', v)
}
</script>

<style scoped>
</style>