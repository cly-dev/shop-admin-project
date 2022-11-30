/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:14:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-12 16:02:14
 * @FilePath: \shop\src\components\LySearch\index.tsx
 * @Description: 表单组件
 */
import LyForm from '../LyForm'
import { FormType } from '@/types/form'
import { Search, RefreshRight } from '@element-plus/icons-vue'
import './index.scss'
import { reactive, ref } from 'vue'
type Props = {
  search?: Function
} & FormType.SearchConfig
const LySearch = (props: Props, { slots }: any) => {
  const {
    formConfig: { options, config },
  } = props
  const formData=ref<any>({});
 const handleChange=(v:any)=>{
  console.log(v);
  formData.value=v;
  // console.log(formData)
 }
  function handleSearch () {
    props?.search && props?.search(formData.value)
  }
  function handleReset(){
    Object.keys(formData.value).forEach((item:any)=>{
      formData['value'][item]='';
    })
  handleSearch();
  }
  console.log(slots)
  return (
    <div>
      <LyForm onFormChange={handleChange} options={options} config={config}></LyForm>
      <section class="btnContent">
        <el-button icon={RefreshRight} onClick={handleReset}>
          重置
        </el-button>
        <el-button type="primary" icon={Search} onClick={handleSearch}>
          搜索
        </el-button>
        {slots?.default?.({ handleReset, handleSearch})}
      </section>
    </div>
  )
}
// export { getFormData }
export default LySearch
