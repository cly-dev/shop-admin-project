<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2022-11-14 00:01:30
 * @Description: 表单容器组件
-->
<template>
    <el-card class="LyformBox">
        <div class="LyFormBoxHeader">
            <span class="title">
                {{props.title}}
            </span>
            <div>
                <slot name="headerRight"></slot>
            </div>
        </div>
        <div class="LyFormBoxMainer">
            <slot></slot>
        </div>
    </el-card>
</template>

<script setup lang="ts">
import LyForm from '../LyForm';
import {withDefaults,defineProps} from "vue";
type Props={
    title:string,
}
const props=withDefaults(defineProps<Props>(),{
    title:'我是标题'
})

</script>

<style scoped lang="scss">
@import "./index.scss";
</style>