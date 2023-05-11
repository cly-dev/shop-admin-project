import { ElMessage } from 'element-plus';
/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 22:26:10
 * @Description: 类目事件操作
 */
import {onMounted} from "vue";
import {getCategoryTree,updateCategoryStatus, delCategory} from "@/api/category"
import {observerState} from "./context";
//事件
export default function useCategroyHandler(){
    //获取树
    const search=(parmas?:any)=>{
        console.log(parmas);
        console.log("请求了")
        observerState.loading=true;
        getCategoryTree(parmas).then((res:any)=>{
           observerState.tree=res;
        }).finally(()=>{
           observerState.loading=false
        })
    }
    //更新状态
    const update=(id:string,status:'0' | '1')=>{
        updateCategoryStatus(id,status).then(()=>{
            search({});
            ElMessage.success("操作成功");
        })
    }
    //删除
    const del=(id:string)=>{
        delCategory(id).then(()=>{
            search({});
            ElMessage.success("删除成功");

        })
    }
    return {
        search,
        update,
        del
    }
}

