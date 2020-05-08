module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: {
        port: 4382, // dev本地端口号
        proxy: {
            '/api': {
                //确定应将哪些请求代理到目标主机 
                target: 'http://localhost:8888',
                ws: true,
                changeOrigin: true,
                pathRewrite: { // 重写路径
                            "/api": ""
                        }
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    }
}