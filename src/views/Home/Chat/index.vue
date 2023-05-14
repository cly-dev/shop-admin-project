<!--
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-05-13 21:25:42
 * @Description: 
-->
<template>
    <div class="chat">
        <div class="aside">
            <div v-for="item in list" @click="()=>{
                handleClick(item)
            }">
                <UserItem  :content="getContent(item)" :key="item._id" :info="item?.userData" :active="item._id===activerIndex" ></UserItem>
            </div>
        </div>
        
        <div class="container" >
            <LiveChat :list="getList" @submit="handleSubmit"  ></LiveChat>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted,onUnmounted,ref,computed} from "vue";
import {getMessageList} from "@/api/socket"
import LiveChat from "./component/LiveChat/index.vue"
import UserItem from "./component/UserItem/index.vue"
import socket from '@/socket'
import {createMessage} from '@/api/socket'
import {sendMessageSocket} from '@/socket/message';
import useStore from "@/pinia/user";
const useAccount=useStore();
const list=ref<any[]>([]);
const activerIndex=ref<string>('');
const getList=computed(()=>{
    if(activerIndex && list.value.length > 0){
       const field= list.value.find((item:any)=>{
            return item['_id']=== activerIndex.value;
        })
        if(field){
            return field.list;
        }
        return []
        
    }
    return []
})
const handleClick=(item:any)=>{
    activerIndex.value=item._id;
}
const arr:any[]=[]

const getContent=(item:any)=>{
    if(item.list && item.list.length > 0){
        const arr=[...item.list]
       const field= arr.reverse().find((item:any)=>{
            return item.type==='1'
        })
        if(field){
            return field.content
        }else{
            return ''
        }
    }
    return '';
}
const handleSubmit=(content:string)=>{
    if(content){
        createMessage({content,accountId:activerIndex.value,type:'2'}).then(()=>{
            getData();
            sendMessageSocket({accountId:activerIndex.value,content,adminId:useAccount.userData?.adminId as string})
        })
    }
}
function getData(){
  getMessageList().then((doc:any)=>{
        list.value=doc.map((item:any)=>{
            const list=item.list.map((doc:any)=>{
                return {
                    ...doc,
                    ...item.userData
                }
            })
            return {
                ...item,
                list
            }
        });
        if(doc.length>0){
            
            activerIndex.value=doc[0]._id;
        }
    })
}
onMounted(()=>{
  getData()
})
onMounted(() => {
	socket.on('user-message', () => {
        getData();
    })
	socket.on('system-message', () => {
        getData();
    })
})
onUnmounted(() => {
	socket.off('admin-message')
	socket.off('system-message')
})
</script>

<style lang="scss" scoped>
    .chat{
        width: 100%;
        height: 100%;
        display: flex;
        .aside{
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            border:1px solid #e6e6e6;
        }
        .container{
            flex: 3;
            border:1px solid #e6e6e6;
            margin-left: -1px;
            height: calc(100% - 2px);
        }
    }
</style>