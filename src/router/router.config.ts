/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-18 21:30:41
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-19 22:25:15
 * @FilePath: \shop\src\router\router.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const routerDefend = (route: any) => {
  route.beforeEach((to: any, from: any, next: any) => {
    // console.log(to)
    next()
  })
  route.afterEach((to: any, from: any, next: any) => {
    // console.log(to)
    // next()
  })
}
export default routerDefend
