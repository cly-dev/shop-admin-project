/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 22:26:10
 * @Description: 商品事件操作
 */
import {getConfigList,updateStatus,deleteConfig,} from "@/api/shop";
import {observerState} from "./context";
import { ElMessage } from "element-plus";
let params={};
//查询
export const search = (data: any) => {
    params=data;
    observerState.loading=true
    getConfigList(data).then(({list,total}:any)=>{
      observerState.data.list=list;
      observerState.data.total=total;
    }).finally(()=>{
      observerState.loading=false;
    })
}
export const handleStatus=(id:string,status:'0' | '1')=>{
    updateStatus(id,status).then(()=>{
      ElMessage.success("操作成功");
      search(params);
    })
}
export const handleDelete=(id:string)=>{
  deleteConfig(id).then(()=>{
    ElMessage.success("删除成功");
    search(params);
  })
}