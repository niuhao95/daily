module.exports = {
  base: '/daily/',
  title: '随手记录',
  themeConfig: {
    nav: [
      { text: 'TypeScript4', link: '/ts/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'GitHub', link: 'https://github.com/hao951029' }
    ],
    sidebar: {
      '/ts/': [
        {
          title: '基础',
          sidebarDepth: 0,
          children: [
            ['/ts/basic/EverydayType', '常见类型'],
            ['/ts/basic/Narrowing', '类型收窄']
          ]
        }
      ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/95835868' }]
  ]
}