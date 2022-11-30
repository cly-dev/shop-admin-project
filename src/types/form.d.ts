/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:21:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-07 15:43:54
 * @FilePath: \shop\src\types\form.d.ts
 * @Description: 表单类型声明
 */
import type { FormProps, FormRules } from 'element-plus'
declare namespace FormType {
  type FormInputType = 'input' | 'select' | 'button' | 'radio'
  type FieldType = { label?: string; value: any }
  type FormItem = {
    span?: number
    type?: string
    modal: FormInputType
    name: string
    label: string
    placeholder?: string
    style?: string
    custom?: any
    defaultValue?: string
    options?: FieldType[],
    required?:boolean
  }
  type FormConfig = {
    options: any & FormProps
    config: {
      items: FormItem[]
      rules?: FormRules[]
    }
    initValue?:{[key:string]:any}
  }
  type SearchConfig = {
    formConfig: FormConfig
  }
}
