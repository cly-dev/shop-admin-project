/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:21:56
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-23 23:52:44
 * @FilePath: \shop\src\types\form.d.ts
 * @Description: 表单类型声明
 */
import type { FormRules } from 'element-plus'
declare namespace FormType {
  type FormInputType = 'input' | 'select' | 'button'
  type FormItem = {
    type?: string
    modal: FormInputType
    name: string
    label: string
    placeholder?: string
    style?: string
    custom?: any
    defaultValue?: string
  }
  type FormConfig = {
    items: FormItem[]
    rules?: FormRules[]
  }
}
