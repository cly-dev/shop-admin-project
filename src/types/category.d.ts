/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-04-19 21:27:44
 * @Description: 类目类型约束
 */
declare namespace CategoryType{
    interface CategoryItem{
        //标题
        title:string;
        //类目描述
        desc?:string
        //类目图标
        iconUrl?:string
        //状态
        status:'0' | '1',
        //父级ID
        parentId:string
        //类目排序
        sortValue:number
    }  
}