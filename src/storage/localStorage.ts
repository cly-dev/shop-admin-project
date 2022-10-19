/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-19 21:31:54
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-19 21:58:34
 * @FilePath: \shop\src\storage\localStorage.ts
 * @Description: 工程函数
 */
import { encrypt, decrypt } from '@/untils/jsencrypt'
class local {
  name = ''
  constructor(name: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.name = name
    } else {
      console.error('错误')
    }
  }
  getItem() {
    return decrypt(localStorage.getItem(this.name))
  }
  setItem(value: any) {
    if (!value) return
    localStorage.setItem(this.name, String(encrypt(value)))
  }
  setJson(value: any) {
    this.setItem(JSON.stringify(value))
  }
  getJson() {
    return JSON.parse(String(this.getItem()))
  }
  clear() {
    localStorage.removeItem(this.name)
  }
}
export default local
