<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-03-16 23:10:23
 * @Description: 客服发送信息
-->
<template>
	<div class="accepterTime">{{ timetToDate(info?.createTime) }}</div>
	<div class="accepterBox">
		<div class="accepterInfo">
			<img class="avater" />
			<div class="infoName"> {{ info?.userName }}</div>
		</div>
		<div class="msgBpx" v-html="info?.content">
		</div>
	</div>
</template>

<script setup lang="ts">
// import liveChatAvater from '@/assets/img/liveChat.jpeg'
import {timetToDate} from '@/untils/common'

type Props = {
	info: any
}
const props = withDefaults(defineProps<Props>(), {
	// 'info.avater':''
})
const {
	info
} = props
console.log(props);
console.log("-=------------属性")
</script>

<style lang="scss" scoped>
.accepterTime {
	line-height: 12px;
	font-size: 12px;
	color: #a3a6ad;
	position: relative;
	top: 5px;
	text-align: center;

}
.accepterBox {
	display: flex;
	padding: 0 10px 10px 10px;
	align-items: flex-start;
	.accepterInfo {
		text-align: center;
	}
	.infoName {
		margin-top: 5px;
		font-size: 12px;
	}
	.msgBpx {
		margin-left: 15px;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
		min-height: 30px;
		display: flex;
		align-items: center;
		max-width: calc(100% - 80px);
		text-align: left;
		background-color: #67C23A;
		padding: 5px;
		color: white;
		position: relative;
		top: 10px;
		&::before {
			content: '';
			position: absolute;
			left: -20.1px;
			border: 1px solid red;
			top: 0px;
			height: 0;
			width: 0;
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
			border-left: 10px solid transparent;
			border-right: 10px solid#67C23A;
		}
	}
}
.avater {
	height: 50px;
	width: 50px;
	border-radius: 50%;
}
</style>
