/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-04-16 22:33:19
 * @Description: 
 */
import Axios from "./request";

//创建商品
export async  function createItem(data?:ProductType.ItemType){
    return await Axios.post("/seller/product/create",data)
}
//获取商品列表
export async function getItemList(params:{size:number,page:number,productTitle?:string,status?:'0' | '1'}){
    return await Axios.get('/seller/product/list',params)
}
//修改商品的状态
export async function updateItemStatus({id,status}:any){
    return await Axios.put(`/seller/product/status/${id}`,{
        status
    })
}
//删除商品
export async function deleteItem(id:string){
    return await Axios.delete('/seller/product/delete',{params:{id}})
}
//获取某个商品的信息
export async function getItemDetail(id:string){
    return await Axios.get(`/seller/product/detail`,{id});
}
//修改商品
export async function updateItem(data:any){
    const {id}=data;
    return await Axios.put(`/seller/product/update/${id}`,data)
}