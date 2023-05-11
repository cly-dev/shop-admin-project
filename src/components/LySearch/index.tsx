/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:14:39
 * @LastEditTime: 2023-04-20 23:05:24
 * @Description: 表单组件
 */
import LyForm from '../LyForm'
import { FormType } from '@/types/form'
import { Search, RefreshRight } from '@element-plus/icons-vue'
import './index.scss'
import {  ref } from 'vue'
type Props = {
  search?: Function
} & FormType.SearchConfig
const LySearch = (props: Props, { slots }: any) => {
  const {
    formConfig: { options, config },
  } = props
  const formRef=ref<any>(null)
  function handleSearch () {
    const parmas={}
   const formData=formRef.value.getFieldValues();
    Object.keys(formData).forEach((k)=>{
      if(formData[k]){
        Object.assign(parmas,{[k]:formData[k]})
      }
    })
    props?.search && props?.search(parmas)
  }
  function handleReset(){
  formRef.value.resetFields();
  handleSearch();
  }
  return (
    <div class="searchContainer">
        <el-row>
          <el-col span={18}>
             <LyForm ref={formRef} options={options} config={config}></LyForm>
         </el-col>
         <el-col span={6}>
            <section class="btnContent">
              <el-button icon={RefreshRight} onClick={handleReset}>
                重置
              </el-button>
              <el-button type="primary" icon={Search} onClick={handleSearch}>
                搜索
              </el-button>
              {slots?.default?.({ handleReset, handleSearch})}
            </section>
        </el-col>
      </el-row>

    </div>
  )
}
// export { getFormData }
export default LySearch
