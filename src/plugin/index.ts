/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-08 20:53:50
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-31 00:27:07
 * @FilePath: \shop\src\plugin\index.ts
 * @Description: 自定义插件
 */
import ElementPlus from 'element-plus'
import LyElement from './LyElement'
export default {
  install: (app: any, options: any) => {
    app.use(ElementPlus)
    app.use(LyElement)
  },
}
