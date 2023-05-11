/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:55:24
 * @Description: 配置
 */
import {FormType} from "@/types/form"
import {observerState} from "../context";
import {timetToDate} from "@/untils/common";
import useCategory from "../useCategory";
import router from "@/router"
import "./index.scss";
import { ElMessage } from "element-plus";
const {update,search,del}=useCategory();
export const getList=search;
export const Column: TableType.ColumnType[] = [
  {
    label: 'id',
    prop: '_id',
    width:'300'
  },
  {
    label: '类目名称',
    prop: 'categoryTitle',
  }, {
    label: '状态',
    prop: 'status',
    template:(data:any)=>{
      return <> {data.row.status==='0'?'启用':'禁用'}</>
    }
  },{
    label: '排序',
    prop: 'sortValue',
  },{
    label: '创建时间',
    prop: 'creatTime',
    template:({row}:any)=>{
      return <>{timetToDate(row.creatTime)} </>
    }
  },
  {
    label: '操作',
    prop: 'action',
    width:'300',
    template: ({row}:any) => {
      const handleEdit=()=>{
        router.push(`/home/category/info/${row._id}`)
      }
      const handleStatus=()=>{
        ElMessage.success("修改成功")
        update(row._id,row.status==='0'?'1':'0')
      }
      const handleWatch=()=>{
        observerState.visible=true;
      }
      return <>
        <el-button onClick={handleEdit}>编辑</el-button>
      
        <el-button type="primary" onClick={handleStatus} >{row.status!=='0'?'启用':'禁用'}</el-button>
      
        
        <el-button type="danger" onClick={()=>del(row._id)} >删除</el-button>
      </>
    },
  },
]

//search搜索栏配置
export const searchConfig:FormType.SearchConfig={
 formConfig : {
    config: {
      items: [
        {
          modal: 'input',
          name: 'title',
          label: '类目名称',
          span:8

        },
        {
          modal: 'input',
          name: 'id',
          label: '类目ID',
          span:8

        },
        {
          modal: 'select',
          name: 'status',
          label: '状态',
          span:8,
          options: [
            {
              label:'全部',
              value:''
            },
            {
              label: '启用',
              value: '0',
            },
            {
              label: '禁用',
              value: '1',
            },
          ],
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