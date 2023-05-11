/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-04-19 21:22:57
 * @Description: 
 */
import Axios from "./request";
//获取类目列表
export const getCategoryList=async(parmas:{size:number,page:number,level?:string,title?:string,status?:'0' | '1'})=>{
    return await Axios.get('/seller/category/list',parmas);
}
//获取类目树
export const getCategoryTree=async (parmas?:any)=>{
    return await Axios.get('/seller/category/tree',parmas)
}
//新建类目
export const createCategory=async (data:Required<Pick<CategoryType.CategoryItem & CommonType.SeoType,'title' | 'SeoTitle' | 'SeoUrl'>>)=>{
    return await Axios.post('/seller/category/create',data)
}
//获取类目详情
export const getCategoryDeatail=async (id:string)=>{
    return await Axios.get('/seller/category/detail',{id})
}
//更改类目状态
export const updateCategoryStatus=async (id:string,status:'0' | '1')=>{
    return await Axios.put(`/seller/category/status/${id}`,{status});
}
//删除类目
export const delCategory=async (id:string)=>{
    return await Axios.delete('/seller/category/del',{params:{id}})
}
//修改类目
export const updateCategory=async (data:any)=>{
    const {id}=data;
    return await Axios.put(`/seller/category/update/${id}`,data)
}
