// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, //开启服务器端渲染(预渲染)
  devServer: {
    host: 'localhost', //默认为localhost
    port: 3001
  },
  runtimeConfig: {
    public: { // public 下的变量可以在客户端和服务端使用
      BASE_URL: '', //全局api域名
    },
  },
  app: {
    head: {
      title: '華筑印刷設計公司',
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: '專業級彩黑輸出 快速交 一本印 報告 簡報 DM 貼紙 彩色書' },
        { name: 'keywords', content: '專業級彩黑輸出 快速交 一本印 報告 簡報 DM 貼紙 彩色書' },
      ],
      link: [],
      script:[]    
    },
  },
  //全局引入插件
  plugins: [
    { src: '@/plugins/router-nprogress.js', mode: 'client'}
  ],
  //全局引入css文件
  css: [
    '@/assets/main.css',
  ],
  modules: [],
})
