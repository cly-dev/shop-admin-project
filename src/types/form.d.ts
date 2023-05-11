/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:21:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-04 00:46:34
 * @FilePath: \shop\src\types\form.d.ts
 * @Description: 表单类型声明
 */
import type { FormProps, FormRules } from 'element-plus'
declare namespace FormType {
  type FormInputType = 'input' | 'select' | 'button' | 'radio' | 'cascader' | 'richText' | 'timePicker' | 'date'
  type FieldType = { label?: string; value: any }
  type FormItem = {
    hiddenItem?: boolean;
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
    relevant?:string,
    onRelevant?:Record<string,any>
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
