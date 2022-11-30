<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-17 22:19:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-13 17:15:03
 * @FilePath: \shop\src\views\Home\components\HomeSider.vue
 * @Description: 侧边菜单
-->
<template>
  <section class="homeSider">
    <div class="logo">
      <h1>美妆商城管理后台</h1>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 第一级 -->
      <template v-for="(value, key) in Menu_MAP" :key="key">
        <el-sub-menu :index="value.path" v-if="value.children && showSubMenu(value.children)">
          <template #title>
            <el-icon class="icon">
                <component :is="value.icon"></component>
              </el-icon>
            <span class="nav">{{ value.label }}</span>
          </template>
          <template v-for="(sub, k) in value?.children" :key="k">
            <!-- 第二级 -->
            <template v-if="sub?.children && sub.show">
              <el-menu-item-group :key="k" :title="sub.label">
                <!-- 第三级 -->
                <el-menu-item
                  v-for="(children, l) in sub.children"
                  :key="l"
                  :index="value.path"
                >
                  <template #title>
                 
                    <router-link :to="children.path">
                      {{ children.label }}
                    </router-link>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </template>
            <template v-else-if="sub.show">
              <el-menu-item :index="sub.path">
                <template #title>
                  <router-link :to="sub.path">{{ sub.label }}</router-link>
                </template>
              </el-menu-item>
            </template>
          </template>
        </el-sub-menu>
        <el-menu-item v-else>
          <template #title>
            <router-link :to="value.path" class="link" active-class="active" replace>
              <el-icon class="icon">
                <component :is="value.icon"></component>
              </el-icon>
              <span>{{ value.label }}</span>
            </router-link>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </section>
</template>

<script lang="ts" setup>
import Menu_MAP from '@/config/menu.config'
import {} from 'vue-router'
import {computed} from "vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const showSubMenu=computed(()=>{
  return ((children:any)=>{
    return children.some((item:any)=>item.show)
  })
})
</script>
<style lang="sass" scoped>
.homeSider
  flex: 0 1 15rem
  height: 100%
  background-color: #545c64

  .link
    color: white
    display: block
    width: 100%
  .active
    color: #409eff
    .icon
      vertical-align: middle
  span
    vertical-align: middle

.logo
  padding-left: 25px
  line-height: 4.5rem
  font-size: 12px
  background-color: #545c64
  color: white
  border-bottom: 1px solid white
</style>