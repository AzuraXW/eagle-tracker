import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'eagle-tracker',
  description: '行为埋点 & 性能采集 & 异常采集 & 请求采集 & 路由采集',

  lastUpdated: true,
  base: '/eagle-tracker',
  cleanUrls: true,

  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/images/logo_transparent.png',

    nav: [
      { text: '指南', link: '/guide/start' },
      { text: '迭代计划', link: '/iteration' },
      // { text: '示例', link: '/guide/use/demo' },
      // { text: '技术点分析', link: '/analyse/index', activeMatch: '/analyse/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速上手', link: '/guide/start' },
            { text: '单例模式', link: '/guide/single' },
          ]
        },
        {
          text: '使用',
          items: [
            { text: '基础说明', link: '/guide/use/basic' },
            { text: '配置项', link: '/guide/use/options' },
            { text: '手动上报', link: '/guide/use/manual' },
            { text: '生命周期', link: '/guide/use/lifecycle' },
            { text: 'TS数据类型', link: '/guide/use/type' },
            { text: 'TS类型保护', link: '/guide/use/guard' },
          ]
        },
        {
          text: '功能',
          items: [
            { text: '错误监控', link: '/guide/fun/error' },
            { text: '加载速度', link: '/guide/fun/load-speed' },
            { text: '用户性能指标', link: '/guide/fun/performance' },
            { text: '自定义埋点', link: '/guide/fun/point' },
            { text: '统计在线时长', link: '/guide/fun/user-page-record' },
          ]
        }
        /*  {
           text: '功能',
           items: [
             { text: '事件采集', link: '/guide/functions/event' },
             { text: '错误采集', link: '/guide/functions/error' },
             { text: '路由采集', link: '/guide/functions/pv' },
             { text: '请求采集', link: '/guide/functions/http' },
             { text: '资源采集', link: '/guide/functions/performance' },
             { text: '曝光采集', link: '/guide/functions/exposure' },
             { text: '导出项', link: '/guide/functions/exports' },
           ]
         }, */
      ],
      '/analyse/': [
        {
          text: '技术点分析',
          items: [
            { text: '基础说明', link: '/analyse/index' },
            { text: '架构', link: '/analyse/framework' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AzuraXW/eagle-tracker' }
    ],
  },
  head: [
    ['link', { rel: 'icon', href: '/eagle-tracker/images/logo_transparent.png' }],
  ]
})