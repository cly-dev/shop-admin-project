/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-25 21:49:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-06 01:53:07
 * @FilePath: \shop\src\components\LyForm\components\select.tsx
 * @Description: select 组件
 */
type Field = {
  label: string
  value: any
}
const Select = (props: any) => {
  const { options = [] } = props
  console.log(props);
  console.log("数据")
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
