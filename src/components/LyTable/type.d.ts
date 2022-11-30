/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:47:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-13 12:18:56
 * @FilePath: \shop\src\components\LyTable\type.d.ts
 * @Description: 表格类型声明
 */
declare namespace TableType {
  export type ColumnType = {
    label?: string
    prop?: string
    width?: string
    custom?: any
    template?: Function
    type?:string
  }
}
