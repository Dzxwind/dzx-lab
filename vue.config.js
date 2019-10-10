const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@style', resolve('src/assets/scss'))
  },
  devServer: {
    open: true, // 是否自动打开浏览器页面
    port: 8080, // 端口地址
    https: false, // 使用https提供服务

    // string | Object 代理设置
    proxy: {
        'map': {
            target: 'http://www.google.cn',
            changeOrigin: true,
            pathRewrite: {'^/map': 'http://www.google.cn'}
        },
        '/test' :{
          target: 'http://172.16.70.66:8767',
          changeOrigin: true,
          pathRewrite: {'^/test': 'http://172.16.70.66:8767'}
        }
    },
    progress: true,
    
    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app => {
      // `app` 是一个 express 实例
    }
}
}