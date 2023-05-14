/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-05-13 00:19:40
 * @Description:
 */
import {io} from 'socket.io-client'
const socket = io('http://localhost:3000')

socket.on('connect', () => {
	console.log('连接成功')
})
socket.on('disconnect', () => {
	console.log('断开连接') // undefined
})
export default socket
