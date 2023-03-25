/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:55:24
 * @Description: 配置
 */
import {FormType} from "@/types/form"
import {observerState} from "../context";
import router from "@/router"
import "./index.scss";
const ProductColumn: TableType.ColumnType[] = [
  {
    type:'expand',
    template: (data: any) => {
      return <div class="productLabel">
        
         </div>
    },
  },
  {
    label: 'id',
    prop: 'id',
    template: (data: any) => {
      return <span>{data?.row?.id} </span>
    },
  },
  {
    label: '类目名称',
    prop: 'title',
  }, {
    label: '状态',
    prop: 'title',
  },{
    label:'类目',
    prop:'title'
  },{
    label: '排序',
    prop: 'title',
  },{
    label: '创建时间',
    prop: 'title',
  },
  {
    label: '操作',
    prop: 'action',
    width:'300',
    
    template: (data: any) => {
      const handleEdit=()=>{
        router.push(`/home/category/info/${data.row.id}`)
      }
      const handleWatch=()=>{
        observerState.visible=true;
      }
      return <>
        <el-button onClick={handleEdit}>编辑</el-button>
        <el-button type="primary" >启用</el-button>
        <el-button type="danger" >删除</el-button>
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
          label: '类目名称',
          span:8

        },
        {
          modal: 'input',
          name: 'categoryId',
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
              value: 1,
            },
            {
              label: '禁用',
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