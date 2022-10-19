/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-04 22:37:24
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-19 22:40:37
 * @FilePath: \shop\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routerDefend from './router.config'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: {
      path: '/login',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/Login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home/index.vue'),
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('@/views/Home/Welcome/index.vue'),
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/Home/Product/index.vue'),
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/Home/Category/index.vue'),
      },
    ],
    redirect: {
      path: '/home/welcome',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
routerDefend(router)
export default router
