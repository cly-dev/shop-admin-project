/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-02-12 21:40:07
 * @Description: 用户接口
 */
import axios from "./request";
const api='/seller';
//登录
export const login=async(data:UserType.LoginParmas)=>{
    return await axios.post(`${api}/login`,data);
}
