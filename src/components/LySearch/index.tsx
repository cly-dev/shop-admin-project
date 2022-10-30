/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:14:39
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-30 22:58:22
 * @FilePath: \shop\src\components\LySearch\index.tsx
 * @Description: 表单组件
 */
import LyForm, { getFormData, resetFormData } from '../LyForm'
import { FormType } from '@/types/form'
import { Search, RefreshRight, Plus } from '@element-plus/icons-vue'
import './index.scss'
type Props = {
  search?: Function
} & FormType.SearchConfig
const LySearch = (props: Props, { slots }: any) => {
  const {
    formConfig: { options, config },
  } = props
  const handSearch = () => {
    props?.search && props?.search(getFormData())
  }
  const handleReset = () => {
    resetFormData()
  }
  console.log(slots)
  return (
    <section class="LySearch">
      <LyForm options={options} config={config}></LyForm>
      <section class="btnContent">
        <el-button icon={RefreshRight} onClick={handleReset}>
          重置
        </el-button>
        <el-button type="primary" icon={Search} onClick={handSearch}>
          搜索
        </el-button>
        <el-button icon={Plus}>新增</el-button>
        {slots?.default?.({ handleReset, handSearch, formData: getFormData() })}
      </section>
    </section>
  )
}
export { getFormData }
export default LySearch
