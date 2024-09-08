import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cherry",
  description: "Actor Model Game Server Framework Based On Golang",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '新手指南', link: '/guides/cherry' },
      { text: '示例', link: '/examples/demo-chat' },
      { text: '核心功能', link: '/core/component' }
    ],

    sidebar: [
      {
        text: '新手指南',
        collapsed: false,
        items: [
          { text: '关于Cherry', link: '/guides/cherry' },
          { text: '安装Go', link: '/guides/install-go' },
          { text: '安装开发工具', link: '/guides/install-ide' },
          { text: '安装Nats', link: '/guides/install-nats' },
          { text: '编写一个cherry服务器', link: '/guides/code-cherry' }
        ]
      },
      {
        text: '示例',
        collapsed: false,
        items: [
          { text: '单节点聊天室', link: '/examples/demo-chat' },
          { text: '多节点集群', link: '/examples/demo-cluster' }
        ]
      },
      {
        text: '核心功能',
        collapsed: false,
        items: [
          { text: '组件管理', link: '/core/component' },
          { text: '通信&集群', link: '/core/cluster' },
          { text: 'Actor模型', link: '/core/actor-model' },
          { text: '连接器', link: '/core/connector' },
          { text: '网络数据包', link: '/core/net-packet' },
          { text: 'Profile配置', link: '/core/profile' },
          { text: 'data-config组件', link: '/core/data-config' },
          { text: 'cron组件', link: '/core/cron' },
          { text: 'gorm组件', link: '/core/gorm' },
          { text: 'etcd组件', link: '/core/etcd' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cherry-game/cherry' }
    ],

    footer: {
      message: 'MIT Licensed | Create by <a href="https://github.com/cherry-game" target="_blank">Cherry Game</a>'
    }
  }
})
