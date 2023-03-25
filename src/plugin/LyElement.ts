/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-31 00:17:09
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-31 00:26:36
 * @FilePath: \shop\src\plugin\LyElement.ts
 * @Description: 业务通用组件
 */
import LyForm from '@/components/LyForm'
import LySearch from '@/components/LySearch'
import LyTable from '@/components/LyTable'
export default {
  install: (app: any, options: any) => {
    app.component('LyForm', LyForm)
    app.component('LySearch', LySearch)
    app.component('LyTable', LyTable)
  },
}
