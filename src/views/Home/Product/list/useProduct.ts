/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 22:26:10
 * @Description: 商品事件操作
 */
import { ElMessage } from "element-plus";
import{ observerState} from "./context";
import {getItemList,updateItemStatus,deleteItem} from "@/api/product"
let data={};
export const search=(parmas:any)=>{
  data=parmas;
  observerState.loading=true
  getItemList(parmas).then((res:any)=>{
    observerState.data.list=res.list;
    observerState.data.total=res.total;
  }).finally(()=>{
    observerState.loading=false;
  })
}
//更新
export const updateStatus=(id:string,status:'0' | '1')=>{
  updateItemStatus({id,status}).then(()=>{
    ElMessage.success("操作成功");
    search(data)
  })
}
//删除
export const delItem=(id:string)=>{
  deleteItem(id).then(()=>{
    ElMessage.success("删除成功");
    search(data);
  })
}
export const handleClick = (data: any) => {
  console.log(data)
}
