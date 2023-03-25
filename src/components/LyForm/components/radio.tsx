/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 22:17:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-01 01:00:45
 * @FilePath: \shop\src\components\LyForm\components\radio.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type Field = {
  label: string
  value: any
}
const Radio = (props: any) => {
  const { options = [] } = props;
  console.log(options);
  console.log('-=---------')
  return (
    <el-radio-group v-model={props.modelValue} {...props}>
      {options.map((item: Field) => {
        return (
          <el-radio key={item.label}  label={item.value}>
            {props?.slot
              ? {
                  default: (item: JSX.IntrinsicAttributes) => (
                    <props.slot {...item}></props.slot>
                  ),
                }
              : item.label}
          </el-radio>
        )
      })}
    </el-radio-group>
  )
}
export default Radio
