import { defineConfig } from 'vitepress'
import include from 'markdown-it-include'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(include, {
        root: './docs',
      })
    }
  },
  lang: 'en-US',
  title: "Obscreen Docs",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/logo.png',
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Install', link: '/markdown-examples' },
      { text: 'Demo', link: '/demo' },
      { text: 'Home', link: 'https://obscreen.io' },
    ],
    
    sidebar: [
      {
        text: 'Intro',
        collapsed: false,
        items: [
          { text: 'What is Obscreen?', link: '/' },
          { text: 'Get started', link: '/install' },
          { text: 'Frequently asked questions', link: '/faq' },
          { text: 'What\'s new', link: '/releases' },
          { text: 'Demo', link: '/demo' },
        ]
      },
      { 
        text: 'Installation', 
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/install' },
          { text: 'Studio (Server)', link: '/install/studio-server', items: [
            { text: 'System-wide', link: '/install/studio-server/system-wide' },
            { text: 'Docker', link: '/install/studio-server/docker' },
          ]},
          { text: 'Player (Client)', link: '/install/player-client', items: [
            { text: 'Raspberry Pi', link: '/install/player-client/raspberry-pi'},
            { text: 'Linux', link: '/install/player-client/linux'},
            { text: 'Browser', link: '/install/player-client/browser'},
            { text: 'Smart TV', link: '/install/player-client/smart-tv'},
            { text: 'Obsense', link: '/install/player-client/obsense'},
          ]}
        ] 
      },
      {
        text: 'How does it work?',
        collapsed: false,
        items: [
          { text: 'Learn more', link: '/learn-more' },
          { text: 'Deployment types', link: '/deployment-types', items:[
            { text: 'Standalone', link: '/deployment-types/standalone' },
            { text: 'Distributed', link: '/deployment-types/distributed' },
          ] }
        ]
      },
      {
        text: 'Features',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/features' },
          { text: 'Customize Web Player', link: '/features/customize-web-player' },
          { text: 'Basic content types', link: '/features/basic-content-types' },
          { text: 'Advanced content types', link: '/features/advanced-content-types' },
          { text: 'Slide scheduling', link: '/features/slide-scheduling' },
          { text: 'Fleet screen management', link: '/features/fleet-screen-management' },
          { text: 'Authentication management', link: '/features/authentication-management' },
          { text: 'Plugin system', link: '/features/plugin-system' },
          { text: 'Multi languages', link: '/features/multi-languages' },
          { text: 'API', link: '/features/api' }
        ]
      },
      {
        text: 'Legal',
        collapsed: false,
        items: [
          { text: 'License', link: '/legal/license' },
          { text: 'Privacy policy', link: '/legal/privacy-policy' },
          { text: 'Terms of service', link: '/legal/terms-of-service' },
          { text: 'Subprocessors', link: '/legal/subprocessors' },
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jr-k/obscreen/' },
      { icon: 'discord', link: 'https://discord.obscreen.io/' }
    ],
    
    search: {
      provider: 'local'
    }
  }
})
