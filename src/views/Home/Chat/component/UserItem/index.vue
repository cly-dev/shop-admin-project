<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-05-13 23:33:11
 * @Description: 
-->
<template>
    <div :class="`userItem ${active?'activer':''}`">
        <img :src="props.info.avater" />
        <div class="itemInfo">
            <div class="itemName">{{ props.info.userName }}123123123dasdad11231</div>
            <div class="itemContent">{{ content }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps,withDefaults} from "vue";
type Props={
    info:{
        avater?:string,
        userName?:string,
        accountId?:string,
        content?:'',
        createTime?:string
    },
    content?:string
    active?:boolean
}
const props=withDefaults(defineProps<Props>(),{})
console.log(props);
console.log('-=--------------')
</script>

<style lang="scss" scoped>
    .userItem{
        padding: 10px;
        display: flex;
        height: 60px;
        cursor: pointer;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        &:hover{
            background-color: #e6e6e6;
        }
        img{
            min-height: 50px;
            min-width: 50px;
            border-radius: 50%;
            max-height: 50px;
            min-width: 50px;
        }
        .itemInfo{
            height: 100%;
            flex: 1;
            margin-left: 15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .itemName{
            height: 35px;
            line-height: 30px;
            font-weight: 900;
            font-size: 18px;
            width: 100%;
        }
        .itemContent{
            height: 30px;
            font-size: 15px;
            line-height: 35px;
            color: #7c7c7c;
           
            width: 100%;
        }
    }
    .activer{
        background-color: #e6e6e6;
    }
</style>