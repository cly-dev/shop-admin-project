/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-04 22:37:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-06 01:07:28
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
      },{
        path:'user',
        name:'user',
        component:()=>import("@/views/Home/User/index.vue")
      },
      {
        path: 'product',
        name: 'product',
        redirect:{
          name:'商品列表'
        },
        children:[
          {
            path:'list',
            name:'商品列表',
            component: () => import('@/views/Home/Product/list/index.vue'),
          },{
            path:'info',
            name:'新增商品',
            component:()=>import("@/views/Home/Product/info/index.vue")
          },{
            path:'info/:id',
            name:'商品信息',
            component:()=>import("@/views/Home/Product/info/index.vue")
          },
        ]
      },
      {
        path: 'category',
        name: 'category',
        children:[{
          path:'list',
          name:'类目列表',
          component:()=>import("@/views/Home/Category/list/index.vue"),
        },{
          path:'info/:id',
          name:'类目编辑',
          component:()=>import("@/views/Home/Category/info/index.vue")
        },{
          path:'info',
          name:'新增类目',
          component:()=>import("@/views/Home/Category/info/index.vue")
        }],
        redirect:{
          name:'类目列表'
        }
        
      },{
        path: 'order',
        name: 'order',
        children:[
          {
            path:'list',
            name:'订单列表',
            component:()=>import("@/views/Home/Order/list/index.vue")
          }
        ],
        redirect:{
          name:'订单列表'
        }
      },{
        path: 'config',
        name: 'config',
        children:[
          {
            path:'list',
            name:'内容配置',
            component:()=>import("@/views/Home/Config/list/index.vue")
          },{
            path:'info/:type',
            name:'新增内容配置',
            component:()=>import("@/views/Home/Config/info/index.vue")
          },{
            path:':id',
            name:'内容配置详情',
            component:()=>import("@/views/Home/Config/info/index.vue")
          }
        ],
        redirect:{
          name:'内容配置'
        }
      }
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
