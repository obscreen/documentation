import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Obscreen Docs",
  head: [
    ['link', { rel: 'icon', href: '/imgs/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/logo.png',
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Install', link: '/markdown-examples' },
      { text: 'Demo', link: '/' },
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Features', link: '/' },
          { text: 'Quick start', link: '/' },
          { text: 'Frequently asked questions', link: '/faq' },
          { text: 'What\'s new', link: '/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jr-k/obscreen/' },
      { icon: 'discord', link: 'https://discord.obscreen.io/' }
    ],
  }
})
