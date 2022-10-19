/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:31:54
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-19 22:08:38
 * @FilePath: \shop\src\storage\sessionStorage.ts
 * @Description: 工程函数
 */
import { encrypt, decrypt } from '@/untils/jsencrypt'
class SessionItem {
  name = ''
  constructor(obj: { name: string }) {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      this.name = obj.name
    } else {
      console.error('错误')
    }
  }
  getItem() {
    return decrypt(sessionStorage.getItem(this.name))
  }
  setJson(value: any) {
    this.setItem(JSON.stringify(value))
  }
  getJson() {
    return JSON.parse(String(this.getItem()))
  }
  setItem(value: any) {
    if (!value) return
    return sessionStorage.setItem(this.name, String(encrypt(value)))
  }
  clear() {
    sessionStorage.removeItem(this.name)
  }
}
export default SessionItem
