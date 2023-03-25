<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-01-20 15:58:25
 * @Description: 订单详细信息
-->
<template>
    <div class="expandBox">
        <el-row>
            <el-col :span="2">
                <el-image  :src="Img" class="productImg"></el-image>
            </el-col>
            <el-col :span="9">
                <ul class="productInfo">
                    <li>
                        <span>商品Id:</span>
                        <span></span>
                    </li> 
                    <li><span>商品名称:</span> <span> 111</span></li> 
                    <li><span>单价:</span></li> 
                    <li><span>件数:</span></li> 
                </ul>
            </el-col>
            <el-col :span="12">
                <ul class="userInfo">
                    <li><span>用户名称:</span></li> 
                    <li><span>退货地址:</span></li> 
                    <li><span>留言:</span></li> 
                    <li><span>图片:</span></li> 
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
    import Img from "@/assets/images/login/01.jpg";
    type Props={
        info?:any
    }
    const props=withDefaults(defineProps<Props>(),{

    })
</script>

<style scoped lang="scss">
    .expandBox{
        ul{
         li{
            display: flex;
            margin-bottom: 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
        }
        }
    }
    .productImg{
        width: 100px;
        height: 100px;
    }
    .productInfo{
        margin-left: 10px;
    }
</style>