/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:16:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-14 00:34:03
 * @FilePath: \shop\src\components\LyForm\components\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ElInput,ElButton,ElInputNumber } from 'element-plus'
import checkbox from './checkbox.vue'
import Radio from './radio'
import Select from './select'
export default {
  input: ElInput,
  select: Select,
  button: ElButton,
  // checkbox,
  radio: Radio,
  inputNumber:ElInputNumber
}
