/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:47:36
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-21 22:12:22
 * @FilePath: \shop\src\components\LyTable\type.d.ts
 * @Description: 表格类型声明
 */
declare namespace TableType {
  export type ColumnType = {
    label: string
    prop: string
    width?: string
    custom?: any
    template?: Function
  }
}
