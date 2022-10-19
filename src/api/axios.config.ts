/*
 * @Author: cly_dev 263118046@qq.com
 * @Date: 2022-10-08 21:01:13
 * @LastEditors: cly_dev 263118046@qq.com
 * @LastEditTime: 2022-10-08 22:32:07
 * @FilePath: \shop\src\api\axios.config.ts
 * @Description:axios配置
 */
//默认请求地址
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

export const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/'
export const timer = 60000
export const reqInterceptor = (config: any) => {
  const requestType: 'json' | 'form-data' = config?.requestType
  const type = {
    json: 'application/json;charset=utf-8',
    'form-data': 'multipart/form-data',
  }
  config['headers']['Content-Type'] = type.json
  // config["headers"]["token"] = token;
  if (requestType) {
    config['headers']['Content-Type'] = type[requestType]
    delete config['requestType']
  }
  if (!window.navigator.onLine) {
    ElMessage.warning('网络已断开连接')
    return
  }
  console.log(config)
  //获取token
  return config
}

export const resInterceptor = (config: any) => {
  if (config.status != '200') {
    ElMessage.warning('网络异常,请稍后再试')
  } else {
    const { data } = config
    if (data.code === '300') {
      const router = useRouter()
      ElMessage.warning(data.msg)
      // store.commit("clearInfo");
      router.push('/')
    }
    if (data.code !== '200') {
      ElMessage.warning(data.msg)
    } else {
      if (Object.keys(config['data']).length > 3) {
        return config['data']
      }
      return config['data']['data'] || true
    }
  }
  ;(err: any) => {
    ElMessage.warning(err.message)
    return Promise.reject(err.message)
  }
  return config
}
