<!--
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-12 16:45:22
 * @Description: 
-->
<template>
    <el-dialog   v-model="props.visiable" @close="emit('close')" width="400px" title="详细信息" >
        <div class="modalContent">
            <div> 电话:123</div>
            <div>性别:男</div>
            <div>生日:''</div>
            <div>购买n次,购买商品n件，总计消费金额n元</div>
        </div>
        <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="emit('close')">
             已知晓
        </el-button>
      </span>
    </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref} from 'vue';
const visible=ref<boolean>(false);
const props=defineProps(['visiable','id']);
const emit=defineEmits(['close'])




</script>

<style scoped lang="scss">
.modalContent{
    margin-top: -30px;
    div{
        padding: 5px 0px;
    }
}
    

</style>