/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-25 21:49:07
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-25 22:31:37
 * @FilePath: \shop\src\components\LyForm\components\select.tsx
 * @Description: select 组件
 */
type Field = {
  label: string
  value: any
}
const Select = (props: any) => {
  const { options = [] } = props
  return (
    <el-select v-model={props.modelValue} {...props}>
      {options.map((item: Field) => {
        return (
          <el-option key={item.label} label={item.label} value={item.value}>
            {props?.slot
              ? {
                  default: (item: JSX.IntrinsicAttributes) => (
                    <props.slot {...item}></props.slot>
                  ),
                }
              : item.label}
          </el-option>
        )
      })}
    </el-select>
  )
}

export default Select
