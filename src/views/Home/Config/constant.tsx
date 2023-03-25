/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:55:24
 * @Description: 配置
 */
import { handleClick } from './useProduct'
import {FormType} from "@/types/form"
import {observerState} from "./context";

import router from "@/router"
import "./index.scss";
import {statusMap} from "@/constant/config"
//位置
export const configMune=[setObj('公告','notice'),setObj("轮播图",'banner'),setObj('类目推荐','category'),setObj('热门类目','hotCategory'),setObj("商品推荐","product"),setObj("活动浮窗",'activity')]
const configColumn: TableType.ColumnType[] = [
  {
    label: 'id',
    prop: 'id',
    template: (data: any) => {
      return <span>{data?.row?.id} </span>
    },
  },
  {
    label: '名称',
    prop: 'configTitle',
  }, {
    label: '位置',
    prop: 'location',
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
  Column:configColumn,
  data:tableData
}

//search搜索栏配置
export const searchConfig:FormType.SearchConfig={
 formConfig : {
    config: {
      items: [
        {
          modal: 'select',
          name: 'location',
          label: '位置',
          span:8,
          options:configMune
        },
        {
          modal: 'input',
          name: 'configTitle',
          label: '配置名称',
          span:8

        },
        {
          modal: 'input',
          name: 'id',
          label: '配置Id',
          span:8
        },
        {
          modal: 'select',
          name: 'status',
          label: '状态',
          span:8,
          options:statusMap
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
function setObj(label:any,value?:any){
  return {
      label,
      value
  }
}