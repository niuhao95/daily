module.exports = {
  base: '/daily/',
  title: '随手记录',
  theme: 'reco',
  themeConfig: {
    modePicker: false,
    subSidebar: 'auto',
    nav: [
      {
        text: '读文档',
        items: [
          { text: 'TypeScript4', link: '/ts/' },
          { text: 'Vue', link: '/vue/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/hao951029' }
    ],
    sidebar: {
      '/ts/': [
        {
          title: '基础',
          sidebarDepth: 0,
          children: [
            ['/ts/basic/EverydayType', '常见类型'],
            ['/ts/basic/Narrowing', '类型收窄'],
            ['/ts/basic/Declare', '声明文件'],
            ['/ts/basic/Modules', '模块']
          ]
        }
      ],
      '/vue/': [
        {
          title: 'Vue3',
          sidebarDepth: 0,
          children: [
            ['/vue/v3/VirtualDom', 'Virtual Dom'],
            ['/vue/v3/Core', 'Core']
          ]
        },
        {
          title: 'Vue2',
          sidebarDepth: 0,
          children: [
            ['/vue/v2/summary', '未整理']
          ]
        }
      ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/95835868' }]
  ]
}