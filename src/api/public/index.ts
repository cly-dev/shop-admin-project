/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-08 22:07:10
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-09 21:27:25
 * @FilePath: \shop\src\api\public\index.ts
 * @Description: 公共接口
 */
import axios from '../request'
const api = '/public'
//获取验证码
export const getCode = (code: number) => {
  return axios.get(`${api}/ImgCode`, { params: { code } })
}
