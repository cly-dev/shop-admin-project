import JSEncrypt from 'jsencrypt'
import publicKey from '@/config/key/pub'
import privateKey from '@/config/key/pra'
// 加密
export function encrypt(txt: any) {
  const encryptor = new JSEncrypt() // 创建加密对象实例
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt: any) {
  const decryptor = new JSEncrypt() // 创建解密对象实例
  decryptor.setPrivateKey(privateKey) // 设置私钥
  return decryptor.decrypt(txt) // 对数据进行解密
}
