/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:55:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-03 16:50:22
 * @FilePath: \shop\src\views\Home\Product\constant.ts
 * @Description: 配置
 */
import {FormType} from "@/types/form"
import {observerState} from "./context";
import router from "@/router"
import "./index.scss";
import {updateStatus,delItem} from "./useProduct";
const ProductColumn: TableType.ColumnType[] = [
  {
    label:'id',
    prop:'_id',
  },
  {
    label: '商品名称',
    prop: 'productTitle',
  }, {
    label: '所属类目',
    prop: 'categoryId',
  },{
    label:'售价',
    prop:'discountPrice'
  },{
    label: '库存',
    prop: 'total',
  },{
    label: '上下架',
    prop: 'status',
    template:({row}:any)=>{
      return <>{row.status==='0'?'上架':'下架'} </>
    }
  },
  {
    label: '操作',
    prop: 'action',
    width:'300',
    template: ({row}:any) => {
      const handleEdit=()=>{
        router.push(`/home/product/info/${row._id}`)
        console.log(router);
      }
      const handleWatch=()=>{
        observerState.visible=true;
      }
      const handleStatus=(status:'0' | '1')=>{
        updateStatus(row._id,status);
      }
      return <>
        <el-button onClick={handleEdit}>编辑</el-button>
     
        <el-button onClick={()=>handleStatus(row.status==='0'?'1':'0')} type="primary">
           {
        row.status==='0'?'下架':'上架'
        }
        </el-button>
        <el-button type="danger" onClick={() => delItem(row._id)}>删除</el-button>
      </>
    },
  },
]
//表格配置
export const tableConfig={
  Column:ProductColumn,
}

//search搜索栏配置
export const searchConfig:FormType.SearchConfig={
 formConfig : {
    config: {
      items: [
        {
          modal: 'input',
          name: 'productTitle',
          label: '商品名称',
          span:8
        },
        {
          modal: 'input',
          name: '_id',
          label: '商品Id',
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