/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-05-13 00:24:51
 * @Description:
 */
import socket from '.'

//发送信息
export const sendMessageSocket = (options: {accountId: string; content: string; adminId: string}) => {
	socket.emit('admin-send', options)
}
