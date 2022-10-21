/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-21 21:08:33
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-21 21:16:02
 * @FilePath: \shop\src\hooks\useRefresh.ts
 * @Description: 屏幕刷新事件
 */
import { onMounted, onUnmounted } from 'vue'
export default function useRefresh(callback: Function) {
  if (typeof window === 'undefined') return
  const handleBefore = () => {
    callback()
  }
  onUnmounted(() => {
    window.removeEventListener('beforeunload', handleBefore)
  })
  onMounted(() => {
    window.addEventListener('beforeunload', handleBefore)
  })
}
