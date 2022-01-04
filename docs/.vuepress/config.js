module.exports = {
  base: '/daily/',
  title: '随手记录',
  themeConfig: {
    nav: [
      {
        text: '笔记',
        items: [
          { text: 'TypeScript4', link: '/ts/' },
          { text: 'Vue', link: '/vue/' },
          { text: 'RegEx', link: '/another/Regex' },
          { text: 'Blog', link: '/articles/func' }
        ]
      },
      {
        text: '手写',
        items: [
          { text: '组件实现', link: '/handwriting/Components/Toast' },
          { text: '编程应用', link: '/handwriting/AppQ/1' },
          { text: '算法', link: '/handwriting/leetcode/4' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/niuhao95' }
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
            ['/vue/v3/Core', 'Core'],
            ['/vue/v3/Minivue', 'mini vue']
          ]
        },
        {
          title: 'Vue2',
          sidebarDepth: 0,
          children: [
            ['/vue/v2/summary', '未整理']
          ]
        }
      ],
      '/handwriting/': [
        {
          title: '组件实现',
          sidebarDepth: 0,
          children: [
            ['Components/Toast', 'Vue3 Toast']
          ]
        },
        {
          title: '编程应用',
          sidebarDepth: 0,
          children: [
            ['AppQ/1', '下划线/驼峰 规则转换'],
            ['AppQ/2', '迭代器实现 flat'],
          ]
        },
        {
          title: '算法',
          sidebarDepth: 0,
          children: [
            ['leetcode/4', '4.寻找两个正序数组的中位数']
          ]
        }
      ],
      '/articles/': [
        {
          title: 'Q&A',
          sidebarDepth: 0,
          children: [
            ['func', '函数表达式/函数声明'],
            ['es6+', 'ES6+'],
            ['iterator', '可迭代/迭代器协议'],
            ['Promise', 'Promise'],
            ['npmscripts', 'package.json'],
            ['http', 'TCP/UDP/HTTP'],
            ['broswercache', '浏览器缓存策略']
          ]
        },
        {
          title: '记录',
          sidebarDepth: 0,
          children: [
            ['PRInGithub', 'github提交pr']
          ]
        }
      ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/95835868' }]
  ]
}