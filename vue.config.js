const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        ws: true, //是否启用websockets
        changeOrigin: true, //开启代理： 在本地会创建一个虚拟服务端，然后发送请求数据，并且同时接收请求数据，这样客户端和服务端进行数据的交互就不会有跨域问题
        target: 'http://localhost:3000', // 要访问的跨域的域名
        pathRewrite: {
          //重写地址，将前缀/api转为""
          '^/api': '',
        },
      },
    },
  },
})
