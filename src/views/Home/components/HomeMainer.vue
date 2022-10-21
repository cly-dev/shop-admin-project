<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-17 22:41:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-21 15:52:58
 * @FilePath: \shop\src\views\Home\components\HomeMainer.vue
 * @Description:主要的路由页面
-->
<template>
  <main>
    <nav>
      <el-tabs
        v-model="tabs.path"
        closable
        type="card"
        class="demo-tabs"
        @tab-remove="handleRemove"
      >
        <el-tab-pane
          v-for="item in list"
          :key="item.path"
          :label="item.label"
          :name="item.path"
        >
        </el-tab-pane>
      </el-tabs>
    </nav>
    <section class="container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </section>
  </main>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

import Menu_MAP from '@/config/menu.config'

import { pathListSession } from '@/storage/session'

type T = {
  path: string
  label: string
}
const route = useRoute()
const router = useRouter()
const tabs = reactive<{ path: string; routeList: string[] }>({
  path: '',
  routeList: ['/home/welcome'],
})
const list: T[] = computed(() => {
  return tabs.routeList.map((item: any) => {
    return Menu_MAP.find((v: any) => v.path === item)
  })
})
const handleRemove = (v: any) => {
  const { routeList } = tabs
  const arr = tabs.routeList.filter((item: any, index: number) => {
    if (item === v) {
      tabs.path = index !== 0 ? routeList[index - 1] : routeList[1]
      return false
    }
    return true
  })
  if (arr.length === 0) {
    tabs.path = '/home/welcome'
  }
  tabs.routeList = arr.length === 0 ? ['/home/welcome'] : arr
}
watch(
  () => tabs.path,
  (newV: string, oldV) => {
    router.push(newV)
  }
)
onBeforeRouteUpdate((to: any, from: any) => {
  const { path } = to
  if (!tabs.routeList.includes(path)) {
    tabs.routeList.push(path)
  }
  tabs.path = path
  pathListSession.setJson(tabs.routeList)
})
onMounted(() => {
  console.log(pathListSession.getJson())
  console.log('----=------')
  tabs.routeList = pathListSession.getJson()
  tabs.path = route.path
})
</script>

<style lang="scss" scoped>
main {
  flex: 1;
}
nav {
  border-top: 1px solid var(--el-border-color-light);
}
.container {
  padding-left: 1rem;
}
</style>