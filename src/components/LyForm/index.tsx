/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:14:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-14 01:11:01
 * @FilePath: \shop\src\components\LySearch\index.tsx
 * @Description: 表单组件
 */
import { FormType } from '@/types/form'
import { defineComponent, reactive,ref,watch,defineExpose} from 'vue'
import './index.scss'
import ItemMap from './components'
import { FormInstance, FormRules } from 'element-plus'
type Props={
  onFormChange:Function
}
export default defineComponent({
  emits:['formChange'],
  props:{
    options:Object,
    config:Object,
    initValue:Object
  },
  setup(props:any & FormType.FormConfig, {emit,expose}) {
    const formRef=ref<FormInstance>();
    const formData= reactive<any>({})
    const ruleMap=reactive<FormRules>({})
    const {
      options = {},
      config: { items = [], rules ={} },
    } = props
  watch(formData,(newV:any)=>{
    emit('formChange',newV)
  })
  watch(()=>props.initValue,(newV:{[key:string]:any})=>{
    if(newV){
      Object.keys(newV).forEach((item:string)=>{
        formData[item]=newV[item]
      })
    }
  },{
    immediate:true
  })
  watch(()=>rules,(newV:any)=>{
    if(newV){
      Object.keys(newV).forEach((k:string)=>{
          ruleMap[k]=newV[k];
      })
    }
  })
  expose({
    getFormInstance:()=>formRef.value
  })
  
  const FormItem = (props: {
    modal: FormType.FormInputType
    name: string
    defaultValue: any,
    required?:string
    label?:string
  }) => {
    const { modal = 'input', name,required,label } = props;
    if(required){
      const msg={
        required: true,
        message:`请输入${label}`,
        trigger: 'change',
      }
      if(ruleMap[name]){
        (ruleMap[name] as any[]).push(msg)
      }else{
        Object.assign(ruleMap,{[name]:[msg]})
      }
    }
    const El = ItemMap[modal]
    return (
      <El v-model={formData[name]} {...props}  style={{ width: '100%' }}></El>
    )
  }
  
  return ()=> (
    <section class="lyForm">
      <el-form ref={formRef} model={formData} {...options} rules={ruleMap}>
        <el-row gutter={20}>
          {items?.map((item: FormType.FormItem) => {
            const _props = { ...item, ...item.custom }
            return (
              <el-col span={item?.span ?? 6} key={item.name}>
                <el-form-item {..._props} label={item.label + ':'}  prop={item.name} >
                  <FormItem
                    placeholder={
                      (item?.modal.includes('input') ? '请输入' : '请选择') +
                      item?.label
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
  },
})
// export default LyForm

