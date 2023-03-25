/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:55:24
 * @Description: 配置
 */
import { handleClick } from './useProduct'
import {FormType} from "@/types/form"
import {observerState} from "./context";
import router from "@/router"
import { OrderStatus } from '@/constant/orderType';
import ExpandRander from "../ExpandRander/index.vue";
import "./index.scss";
const ProductColumn: TableType.ColumnType[] = [
  {
    type:'expand',
    template: (data: any) => {
      return <ExpandRander info={data}></ExpandRander>
    },
  },
  {
    label: '订单号',
    prop: 'id',
    template: (data: any) => {
      return <span>{data?.row?.id} </span>
    },
  },{
    label: '创建时间',
    prop: 'title',
  },
  {
    label: '下单时间',
    prop: 'title',
  }, {
    label: '发货时间',
    prop: 'title',
  },{
    label:'订单金额',
    prop:'title'
  },{
    label: '订单状态',
    prop: 'title',
  },{
    label: '处理状态',
    prop: 'title',
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
          label: '订单号',
          span:8
        },
        {
          modal: 'input',
          name: 'id',
          label: '商品Id',
          span:8
        },
        {
          modal: 'select',
          name: 'categoryTitle',
          label: '订单状态',
          span:8,
          options:OrderStatus
        },
        {
          modal: 'date',
          name: 'timer',
          label: '创建时间',
          type:"datetimerange",
          span:16,
          custom:{
            isRange:true
          }
        },
        {
          modal: 'select',
          name: 'categoryTitle',
          label: '处理状态',
          span:8,
          options:OrderStatus
        },
        {
          modal: 'date',
          name: 'timer',
          type:"datetimerange",
          label: '下单时间',
          span:16,
          custom:{
            isRange:true
          }
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