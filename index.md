---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Cherry"
  text: "基于Actor模型的游戏服务端框架"
  tagline: Go + Actor Model
  actions:
    - theme: brand
      text: 新手指南 💡
      link: /guides/cherry
    - theme: alt
      text: 示例
      link: /examples/demo-chat

features:
  - title: 组件管理
    details: 基于组件的方式进行功能组合，统一管理所有组件的生命周期。可自定义组件，方便灵活扩展。支持集群模式和单机模式。
    link: core/component

  - title: 通信&集群
    details: 内部进程基于NATS通信。轻松构建高性能、分布式且可扩展的游戏服务。框架自带多种方式的发现服务。
    link: core/cluster

  - title: Actor模型
    details: 依托Goroutine优势，轻松创建成千上万个Actor模型。方便玩家与玩家，模块与模块之间通信。
    link: core/actor-model

  - title: 连接器
    details: 组件化方式构建网络连接器，框架自带Tcp、WebSocket、Http Server。
    link: core/connector

  - title: 网络数据包
    details: 默认集成pomelo数据包格式，也可以按需自定义个性的数据包格式。
    link: core/net-packet

  - title: Profile配置
    details: 可根据多个开发、运行环境进行参数配置，配置文件支持多文件拆分、组合。
    link: core/profile

  - title: 自定义组件
    details: 框架自带cron、data-config、etcd、gin、gorm等组件。也可根据需求自定义组件。
    link: core/component

  - title:  参考示例
    details: 单节点示例、多节点示例，一键启动，方便快速了解框架。
    link: examples/demo-chat
---