const path = require('path');

module.exports = {
  devServer: {
    // 프록시 설정
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      '/api': {
        // 프록시 요청을 보낼 서버의 주소
        target: 'http://localhost:3000'
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  }
}
