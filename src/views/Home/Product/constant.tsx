/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:55:24
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-21 22:27:33
 * @FilePath: \shop\src\views\Home\Product\constant.ts
 * @Description: 配置
 */
import { handleClick } from './useProduct'
export const ProductColumn: TableType.ColumnType[] = [
  {
    label: '编号',
    prop: 'id',
    width: 'auto',
    template: (data: any) => {
      return <span>{data?.row?.id} </span>
    },
  },
  {
    label: '标题',
    prop: 'title',
    width: '200',
  },
  {
    label: '操作',
    prop: 'action',
    width: '200',
    template: (data: any) => {
      return <el-button onClick={() => handleClick(data)}>点我</el-button>
    },
  },
]
