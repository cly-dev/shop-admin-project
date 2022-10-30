/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:21:56
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-30 21:39:36
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
    options?: FieldType[]
  }
  type FormConfig = {
    options: any & FormProps
    config: {
      items: FormItem[]
      rules?: FormRules[]
    }
  }
  type SearchConfig = {
    formConfig: FormConfig
  }
}
