/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-08 21:00:52
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-09 21:29:53
 * @FilePath: \shop\src\api\request.ts
 * @Description: axios请求封装
 */
import axios from 'axios'
import { baseURL, timer, reqInterceptor, resInterceptor } from './axios.config'
import type { AxiosRequestConfig } from 'axios'
class Request {
  constructor(
    baseUrl: string,
    timer: number,
    reqInterceptor: any,
    resInterceptor: any
  ) {
    this.init(baseUrl, timer, reqInterceptor, resInterceptor)
  }
  init(baseUrl: string, timer: any, reqInterceptor: any, resInterceptor: any) {
    axios.defaults.baseURL = baseUrl
    axios.defaults.timeout = timer
    axios.interceptors.request.use(reqInterceptor)
    axios.interceptors.response.use(resInterceptor)
  }
  get(url: string, params?: any) {
    return axios.get(url, params)
  }
  post(url: string, data: any, config?: AxiosRequestConfig) {
    return axios.post(url, data, config)
  }
  put(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.put(url, data, config)
  }
  delete(url: string, config?: AxiosRequestConfig) {
    return axios.delete(url, config)
  }
  request(url: string, config?: AxiosRequestConfig) {
    return axios({
      url,
      ...config,
    })
  }
}
export default new Request(baseURL, timer, reqInterceptor, resInterceptor)
