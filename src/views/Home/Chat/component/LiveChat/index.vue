<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-03-16 00:03:27
 * @Description: 
-->
<template>
		<div class="dialogMainer">
			<div class="msgList" ref="listRef">
				<div v-for="item in list" :key="item.createTime">
					<AccepterBox v-if="item.type === '1'" :info="item" ></AccepterBox>
					<SenderBox v-else :info="item"></SenderBox>
				</div>
			</div>
			<div class="input">
				<div class="inputOperter">
				<el-icon class="icon" title="上传图片" @click="() => handleClick('img')"><Picture /></el-icon>
				<el-icon class="icon videoIcon" title="上传视频" @click="() => handleClick('video')"><VideoCamera /></el-icon>
				</div>
				<!-- 输入框 -->
				<textarea v-model.trim.lazy="content" maxlength="120" class="inputText" placeholder="请输入你的问题"></textarea>
			</div>
			<div class="btnContent">
				<el-button type="primary" @click="handleSubmit">发送</el-button>
			</div>
		</div>
	<input style="display: none;" type="file" ref="inputRef" @change="handleUpdate" />

</template>

<script setup lang="ts">
import {Picture, VideoCamera} from '@element-plus/icons-vue'
import {ref,  watch, defineEmits,defineProps,withDefaults, nextTick} from 'vue'
import AccepterBox from './components/AccepterBox/index.vue'
import SenderBox from './components/SenderBox/index.vue'
import { upload } from '@/api/public'
import { ElMessage } from 'element-plus'
import { checkImg, checkVideo } from '@/untils/common'
type Props={
	list:any[]
	userData:any
}
const props=withDefaults(defineProps<Props>(),{})
const emit=defineEmits(['submit'])
const updateType = ref<'img' | 'video' | ''>('img')
const inputRef = ref<any>(null)
const listRef = ref<HTMLDivElement>()
const dialogVisible = ref<boolean>(false)
const content = ref<string>('')

//消息列表
const handleSubmit = () => {
	emit('submit',content.value)
	content.value='';
}
const handleClick = (type: 'img' | 'video') => {
	updateType.value = type
	if (inputRef.value) {
		inputRef.value.click()
	}
}
function handleUpdate(e: any) {
	const file = e.target.files[0]
	const formData = new FormData()
	if (updateType.value === 'img') {
		if (checkImg(file.type)) {
			formData.append('file', file)
		} else {
		updateType.value=''
			ElMessage.warning('只允许上传png、jpg、webp的图片')
			return
		}
	} else if (updateType.value === 'video') {
		if (checkVideo(file.type)) {
			formData.append('file', file)
		} else {
			ElMessage.warning('只允许上传mp4、mov视频')
		updateType.value=''

			return
		}
	}
	upload(formData).then((v: any) => {
		let el = ''
		if (updateType.value === 'img') {
			el = `<img src='${v}' style="width:40px;height:40px"/>`
		} else {
			el = `<video src='${v}' controls autoplay/>`
		}
		emit('submit',el)
	}).finally(()=>{
		inputRef.value.value=''
		updateType.value=''
	})
}

watch(
	() => dialogVisible.value,
	(newV: boolean) => {
		if (!newV) {
			content.value = ''
		}
	},
)
watch(()=>props.list,(newV)=>{
	console.log(newV);
	console.log('-=--------------1235')
	nextTick(()=>{
	if (listRef.value) {
		listRef.value.scrollTop = listRef.value.scrollHeight
	}
	})
	
},{
	immediate:true
})
</script>

<style lang="scss" scoped>

.dialogMainer {
	height: 100%;
	display: flex;
	flex-direction: column;
	.msgList {
		border: 1px solid #d6d6d6;
		height: 350px;
		overflow-x: hidden;
		overflow-y: auto;
		padding: 10px 0;
	}
	.input {
		flex: 1;
		margin-top: -1px;
	}
	.inputOperter {
		// border-bottom: none;
		margin: -1px 0;
		height: 40px;
		display: flex;
		align-items: center;
		padding: 0 10px;
		.icon {
			cursor: pointer;
			font-size: 20px;
		}
		.videoIcon {
			margin-left: 20px;
		}
	}

	.inputText {
		border: none;
		border-top: none;
		display: block;
		width: 100%;
		resize: none;
		// padding: 10px;
		font-size: 16px;
		height: calc(100% - 60px);
		padding: 0 10px;
	}
	.btnContent{
		text-align: right;
		padding-right: 15px;
		padding-bottom: 20px;
	}
}
</style>
