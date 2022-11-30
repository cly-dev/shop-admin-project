import { FormType } from "@/types/form"
import {observer } from "./context";
/*
 * @Author: cly_dev 2663118046@qq.com
 * @Date: 2022-11-12 16:06:28
 * @Description: 
 */
const Column: TableType.ColumnType[] = [
    {
      label: 'Id',
      prop: 'id',
      width: 'auto',
      template: (data: any) => {
        return <span>{data?.row?.id} </span>
      },
    },
    {
      label: '昵称',
      prop: 'title',
    },{
        label: '邮箱',
        prop: 'title',
      },{
        label: '注册时间',
        prop: 'title',
      },
    {
      label: '操作',
      prop: 'action',
      template: (data: any) => {
        function handleDetail(){
          // console.log(modalRef.value);
          observer.visible=true
          observer.id=data.row.id;
          console.log(data)
        }
        return <>
          <el-button type="primary" onClick={handleDetail}  link >详细信息</el-button>
        </>
      },
    },
  ]
  const tableData = [
    {
      id: '1',
      title: '2016-05-03',
    },
    {
      id: '2',
      title: '3016-05-03',
    },
  ]

//表格配置
export const tableConfig={
    Column,
    data:tableData
  }
  //search搜索栏配置
export const searchConfig:FormType.SearchConfig={
    formConfig : {
       config: {
         items: [
           {
             modal: 'input',
             name: 'nickName',
             label: '用户昵称',
           },
           {
             modal: 'input',
             name: 'accountId',
             label: '用户Id',
           },
           
         ],
         rules: [],
       },
       options: {},
     }
   }