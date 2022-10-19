<template>
  <div>
    <el-button @click="handleClick" :disabled="disabled">你好</el-button>
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const name = ref<string>('')
const disabled = ref<boolean>(false)
function handleClick() {
  name.value = '333'
  disabled.value = !disabled.value
}
</script>

<style scoped>
</style>