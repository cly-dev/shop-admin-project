/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-05-13 00:24:59
 * @Description:
 */
import socket from '.'
//登录
export const loginSocket = (id: string) => {
	socket.emit('admin-login', id)
}
//退出登录
export const loginOutSocket = (id: string) => {
	socket.emit('admin-loginOut', id)
}
