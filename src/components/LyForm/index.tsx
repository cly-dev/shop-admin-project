/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:14:39
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-30 22:24:52
 * @FilePath: \shop\src\components\LySearch\index.tsx
 * @Description: 表单组件
 */
import { FormType } from '@/types/form'
import { reactive } from 'vue'
import './index.scss'
import ItemMap from './components'

const formData = reactive<any>({})
const LyForm = (props: FormType.FormConfig) => {
  const {
    options = {},
    config: { items = [], rules = [] },
  } = props
  const FormItem = (props: {
    modal: FormType.FormInputType
    name: string
    defaultValue: any
  }) => {
    const { modal = 'input', name } = props
    const El = ItemMap[modal]
    return (
      <El v-model={formData[name]} {...props} style={{ width: '100%' }}></El>
    )
  }
  return (
    <section class="lyForm">
      <el-form {...options} rules={rules}>
        <el-row gutter={20}>
          {items?.map((item: FormType.FormItem) => {
            const _props = { ...item, ...item.custom }
            return (
              <el-col span={item?.span ?? 6}>
                <el-form-item {..._props} label={item.label + ':'}>
                  <FormItem
                    placeholder={
                      (item?.modal === 'input' ? '请输入' : '请选择') +
                      item?.name
                    }
                    {..._props}
                  ></FormItem>
                </el-form-item>
              </el-col>
            )
          })}
        </el-row>
      </el-form>
    </section>
  )
}
export default LyForm
const getFormData = () => {
  const data = {}
  Object.keys(formData).forEach((k: string) => {
    if (formData[k]) {
      Object.assign(data, { [k]: formData[k] })
    }
  })
  return data
}
const resetFormData = () => {
  Object.keys(formData).forEach((k: any) => {
    formData[k] = ''
  })
}
export { getFormData, resetFormData }
