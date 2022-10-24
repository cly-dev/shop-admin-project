/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:14:39
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-24 22:06:29
 * @FilePath: \shop\src\components\LySearch\index.tsx
 * @Description: 表单组件
 */
import { FormType } from '@/types/form'
import type { FormProps } from 'element-plus'
import { reactive, ref } from 'vue'

import ItemMap from './components'

type Props = {
  config: FormType.FormConfig
  options: FormProps
}
const info = ref<any>('')
const formData = reactive<any>({
  name: '111',
})
const LyForm = (props: Props) => {
  const {
    options = {},
    config: { items = [], rules = [] },
  } = props

  items.forEach((item: FormType.FormItem) => {
    formData[item.name] = item?.defaultValue || ''
  })
  formData.age = 20
  const FormItem = (props: { modal: FormType.FormInputType; name: string }) => {
    const { modal = 'input', name } = props
    const El = ItemMap[modal]
    return <El v-model={info.value} {...props}></El>
  }
  return (
    <>
      {{ ...formData }}
      <input v-model={formData.name}></input>
      <el-form {...options}>
        {items?.map((item: FormType.FormItem) => {
          const _props = { ...item, ...item.custom }
          return (
            <el-form-item {..._props}>
              <FormItem {..._props}></FormItem>
            </el-form-item>
          )
        })}
      </el-form>
    </>
  )
}
export default LyForm
