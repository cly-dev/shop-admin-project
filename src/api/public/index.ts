/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-08 22:07:10
 * @Description: 公共接口
 */
import axios from '../request'
const api = '/public'
//获取验证码
export const getCode = (code: number) => {
  return axios.get(`${api}/ImgCode`,{ code })
}
//上传文件
export const upload=(file:FormData)=>{
  return axios.post(`${api}/upload`,file,{
    requestType:'form-data'
  })
}