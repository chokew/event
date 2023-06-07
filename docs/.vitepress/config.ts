import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "some event",
  description: "nothing",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      { text: 'Examples', link: '/Document/2023/May/2023-May-docs.md' }
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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
