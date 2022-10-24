/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-24 21:54:24
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-24 23:07:51
 * @FilePath: \shop\src\components\LyForm\components\input.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { reactive } from 'vue'
const info = reactive<any>({})
const LyInput = (props: any, ctx: any) => {
  return (
    <>
      {info.name}
      {info.age}
      {/* <button onClick={handlClick}> 点我</button> */}
      <el-input v-model={info.name}></el-input>
      <el-input v-model={info['age']}></el-input>
    </>
  )
}
export default LyInput
