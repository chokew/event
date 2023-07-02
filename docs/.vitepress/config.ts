import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "event",
  description: "nothing",
  base: '/event/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      // { text: 'May', link: '/Document/2023/May/2023-May-docs.md' }
      {
        text: '2023',
        items: [
          { text: '5月', link: '/Document/2023/May/2023-May-docs.md' },
          { text: '6月', link: '/Document/2023/June/2023-June-docs.md' },
          { text: '7月', link: '/Document/2023/July/2023-July-docs.md' }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: [
      {
        text: '2023',
        items: [
          { text: '5月', link: '/Document/2023/May/2023-May-docs.md' }
        ]
      },
      {
        text: '2023',
        items: [
          { text: '6月', link: '/Document/2023/June/2023-June-docs.md' }
        ]
      },
      {
        text: '2023',
        items: [
          { text: '7月', link: '/Document/2023/July/2023-July-docs.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chokew/event' }
    ]
  }
})
