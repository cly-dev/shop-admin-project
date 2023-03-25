/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:55:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-01-19 02:41:10
 * @FilePath: \shop\src\views\Home\Product\constant.ts
 * @Description: 配置
 */
import { handleClick } from './useProduct'
import {FormType} from "@/types/form"
import {observerState} from "./context";
import router from "@/router"
import "./index.scss";
const ProductColumn: TableType.ColumnType[] = [
  {
    label: 'id',
    prop: 'id',
    template: (data: any) => {
      return <span>{data?.row?.id} </span>
    },
  },
  {
    label: '商品名称',
    prop: 'title',
  }, {
    label: '所属类目',
    prop: 'title',
  },{
    label:'售价',
    prop:'title'
  },{
    label: '库存',
    prop: 'title',
  },{
    label: '上下架',
    prop: 'title',
  },
  {
    label: '操作',
    prop: 'action',
    width:'300',
    template: (data: any) => {
      const handleEdit=()=>{
        router.push(`/home/product/info/${data.row.id}`)
        console.log(router);
      }
      const handleWatch=()=>{
        observerState.visible=true;
      }
      return <>
        <el-button onClick={handleEdit}>编辑</el-button>
        <el-button onClick={handleEdit} type="primary">上架</el-button>
        <el-button type="danger" onClick={() => handleClick(data)}>删除</el-button>
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
  Column:ProductColumn,
  data:tableData
}

//search搜索栏配置
export const searchConfig:FormType.SearchConfig={
 formConfig : {
    config: {
      items: [
        {
          modal: 'input',
          name: 'title',
          label: '商品名称',
          span:8
        },
        {
          modal: 'input',
          name: 'id',
          label: '商品Id',
          span:8
        },
        {
          modal: 'input',
          name: 'categoryTitle',
          label: '类目',
          span:8

        },
       
      ],
      rules: [],
    },
    options: {},
  }
}
//弹窗配置
export const modalConfig:FormType.FormConfig & any={
  title:'商品',
  formConfig : {
    config: {
      items: [
        {
          modal: 'input',
          name: 'title',
          label: 'title',
          defaultValue: '2000',
          required:true,
          prop:'title',
          span:24
        },
        {
          modal: 'select',
          name: 'age',
          label: 'age',
          span:24,
          options: [
            {
              label: '1',
              value: 1,
            },
          ],
        },
        {
          modal: 'radio',
          name: 'hobby',
          label: 'hobby',
          span:24,
          options: [
            {
              label: '1',
              value: 1,
            },
            {
              label: '2',
              value: 2,
            },
          ],
        },
       
      ],
      rules: [],
    },
    options: {},
  }
}