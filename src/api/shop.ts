/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-03-02 21:19:55
 * @Description: 内容配置
 */
import Axios from "./request";
const baseURL='/seller/config'
// 新增
export async function createConfig(data?:any){
    return await Axios.post("/seller/config/create",data)
}
//查看列表
export async function getConfigList(parmas:any){
    return await Axios.get("/seller/config/list",parmas)
}
//修改状态
export async function updateStatus(id:string,status:'0' | '1'){
    return await Axios.put(`/seller/config/status/${id}`,{status})
}
//修改配置
export async function updateConfig(data:any){
    const {id}=data;
    return await Axios.put(`${baseURL}/update/${id}`,data);
}
//获取配置详情
export async function getConfigDetail(id:string){
    return await Axios.get(`${baseURL}/detail`,{id});
}
//删除配置
export async function deleteConfig(id:string){
    return await Axios.delete(`${baseURL}/delete`,{params:{id}})
}