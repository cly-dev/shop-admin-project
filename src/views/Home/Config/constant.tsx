/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:55:24
 * @Description: 配置
 */
// import { handleClick } from './useConfig'
import {FormType} from "@/types/form"

import router from "@/router"
import "./index.scss";
import {statusMap} from "@/constant/config"
import { timetToDate } from "@/untils/common";
import { handleDelete, handleStatus } from "./useConfig";
//位置
export const configMune=[setObj('公告','notice'),setObj("轮播图",'banner'),setObj('类目推荐','category'),setObj('热门类目','hotCategory'),setObj("商品推荐","product"),setObj("活动浮窗",'activity')]
const configColumn: TableType.ColumnType[] = [
  {
    label: 'id',
    prop: '_id',
  
  },
  {
    label: '名称',
    prop: 'configTitle',
   
  }, {
    label: '位置',
    prop: 'location',
     template:({row}:any)=>{
      const field=configMune.find((item)=>{
        return item.value===row.location;
      })
      return field?field.label:''
    }
  },{
    label:'状态',
    prop:'status',
    template:({row}:any)=>{
      return row.status==='0'?'启用':'禁用'
    }
  },{
    label: '排序',
    prop: 'sortValue',
  },{
    label: '创建时间',
    prop: 'createTime',
    template:({row}:any)=>{
      return <>{timetToDate(row.createTime)}</>
    }
  },
  {
    label: '操作',
    prop: 'action',
    width:'300',
    template: ({row}:any) => {
      const handleEdit=()=>{
        router.push(`/home/config/${row._id}?type=${row.location}`)
      }
      const handleWatch=()=>{
        // observerState.visible=true;
      }
      return <>
        <el-button onClick={handleEdit}>编辑</el-button>
        <el-button onClick={()=>handleStatus(row._id,row.status==='1'?'0':'1')} type="primary">{row.status==='1'?'启用':'禁用'}</el-button>
        <el-button type="danger" onClick={()=>handleDelete(row._id)} >删除</el-button>
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
          name: '_id',
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