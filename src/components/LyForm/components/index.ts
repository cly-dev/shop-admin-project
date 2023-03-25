/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-23 21:16:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-01-20 15:53:04
 * @FilePath: \shop\src\components\LyForm\components\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ElInput,ElButton,ElInputNumber,ElCascader,ElTimePicker,ElDatePicker } from 'element-plus'
// import checkbox from './checkbox.vue'
import Radio from './radio'
import Select from './select';
import Upload from "./upload.vue";
import RichText from "./richText.vue";
export default {
  input: ElInput,
  select: Select,
  button: ElButton,
  // checkbox,
  radio: Radio,
  inputNumber:ElInputNumber,
  upload:Upload,
  cascader:ElCascader,
  richText:RichText,
  timePicker:ElTimePicker,
  date:ElDatePicker
}
