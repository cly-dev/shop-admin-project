/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-18 21:50:36
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
