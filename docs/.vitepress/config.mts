import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "甘肃万云信息技术",
  description: "专注于软件开发",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    siteTitle: '甘肃万云信息技术',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '开源产品',
        items: [
          { text: '后台管理', link: '/products/admin' },
          { text: '媒体服务', link: '/products/media' },
          { text: '国标平台', link: '/products/signe' }
        ]
      },
      {
        text: '行业产品',
        items: [
          { text: '锐视平台', link: '/industry/vision' },
        ]
      },
      {
        text: '技术参考',
        items: [
          { text: '国标信令', link: '/document/signe' },
          { text: '媒体开发', link: '/document/media' },
        ]
      },
      { text: '关于我们', link: '/about' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: `<a href="https://www.gswy.org/" target="_blank">甘肃万云信息技术有限公司</a>`,
      copyright: `Copyright © 2020-${new Date().getFullYear()} gswy.org`
    }
  },
  vite: {
    ssr: {
      noExternal: ['@escook/vitepress-theme', 'vitepress']
    }
  }
})
