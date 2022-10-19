/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-04 22:37:24
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-09 19:18:39
 * @FilePath: \shop\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'
console.log(process.env)
const app = createApp(App)
app.use(store).use(router).use(ElementPlus)
app.mount('#app')
