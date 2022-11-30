/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-18 21:50:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-13 15:09:51
 * @FilePath: \shop\src\types\router.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-18 21:50:36
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-18 21:55:50
 * @FilePath: \shop\src\types\router.d.ts
 * @Description: 路由配置
 */
declare namespace Router {
  type RouterParams = {
    path: string
    icon?: any
    label: string
    show?:boolean
    children?: RouterParams[]
  }
}
