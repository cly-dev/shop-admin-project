/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-17 23:05:41
 * @Description: 首页路由菜单
 */
import {
  Discount,
  Goods,
  Folder,
  Tickets,
  Brush,
  User,
  Setting,
  Position,
} from '@element-plus/icons-vue'
const menu: Array<Router.RouterParams> = [
  {
    path: '/home/welcome',
    label: '首页',
    icon: Discount,
  },
  {
    path: '/home/user',
    label: '客户管理',
    icon: User,
  },
  {
    path: '/home/product',
    label: '商品管理',
    icon: Goods,
    children:[{
      path:'/home/product/list',
      label:'商品列表',
      show:false,
      icon: Goods,
    }]
  },
  {
    path: '/home/category',
    label: '品类管理',
    icon: Folder,
  },
  {
    path: '/home/order',
    label: '订单管理',
    icon: Tickets,
  },
  {
    path: '/home/config',
    label: '内容配置',
    icon: Brush,
  },
  
  {
    path: '/home/service',
    label: '客户系统',
    icon: Position,
  },
  {
    path: '/home/setting',
    label: '系统设置',
    icon: Setting,
  },
]
export default menu
