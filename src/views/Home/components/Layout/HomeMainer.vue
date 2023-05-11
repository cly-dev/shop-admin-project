<!--
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-17 22:41:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-05-02 15:31:27
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
        @click="handleClick"
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
      <router-view >
      </router-view>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRefresh } from '@/hooks'
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
const tabs = reactive<{ path: string; routeList: string[],href:string }>({
  path: '',
  routeList: ['/home/welcome'],
  href:''
})
const list: T[] = computed(() => {
  return tabs.routeList.map((item: any) => {
    return Menu_MAP.find((v: any) => item.includes(v.path))
  })
})

const handleRemove = (v: any) => {
  const { routeList } = tabs
  const arr = tabs.routeList.filter((item: any, index: number) => {
    if (item.includes(v)) {
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
const handleClick=()=>{
  router.push(tabs.path)
}

watch(
  () => tabs.href,
  (newV: string) => {
    console.log(newV)
    router.push(newV)
  }
)
useRefresh(() => {
  pathListSession.setJson(tabs.routeList)
})
onBeforeRouteUpdate((to: any, from: any) => {
  const { path } = to
  const arr=path.split('/');
  const url=`/${arr[1]}/${arr[2]}`;
  if (!tabs.routeList.some((item:string)=>{
    return item.includes(url)
  })) {
    tabs.routeList.push(url)
  }
  pathListSession.setJson(tabs.routeList)
  tabs.path=url
})
onMounted(() => {
    tabs.routeList = pathListSession.getJson() || ['/home/welcome'];
    const {path}=route;
    const arr=path.split('/');
    const url=`/${arr[1]}/${arr[2]}`;
    tabs.path=url;
})
</script>

<style lang="scss" scoped>
::v-deep{
  .el-tabs__header{
    margin: 0px;
  }
}
main {
  flex: 1;
}
nav {
  border-top: 1px solid var(--el-border-color-light);
}
.container {
  padding-left: 1rem;
  height: calc(100vh - 150px);
  width: calc(100% - 20px);
  padding-top: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>