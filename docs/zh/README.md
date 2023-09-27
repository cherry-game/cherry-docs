---
home: true
icon: home
title: 首页
heroImage: ./logo.svg
bgImage: ./assets/bg/6-light.svg
bgImageDark: ./assets/bg/6-dark.svg
heroText: Cherry
tagline: 一款基于Actor模型的Go分布式游戏服务端框架。
actions:
  - text: 新手指南 💡
    link: ./guide/
    type: primary

  - text: 示例
    link: ./demo/
    type: secondary

highlights:
  - header: 特性
    features:

      - title: 组件管理
        icon: fa-solid fa-box-archive
        details: 基于组件的方式进行功能组合，统一管理所有组件的生命周期。可自定义组件，方便灵活扩展。支持集群模式和单机模式。
        link: core/component

      - title: 通信&集群
        icon: fa-solid fa-sitemap
        details: 内部进程基于NATS通信。轻松构建高性能、分布式且可扩展的游戏服务。框架自带多种方式的发现服务。
        link: core/cluster

      - title: Actor模型
        icon: fa-solid fa-route
        details: 依托Goroutine优势，轻松创建成千上万个Actor模型。方便玩家与玩家，模块与模块之间通信。
        link: core/actor-model

      - title: 连接器
        icon: fa-solid fa-copy
        details: 组件化方式构建网络连接器，框架自带Tcp、WebSocket、Http Server。
        link: core/connector

      - title: 网络数据包
        icon: fa-solid fa-grip
        details: 默认集成pomelo数据包格式，也可以按需自定义个性的数据包格式。
        link: core/net-packet

      - title: Profile配置
        icon: fa-solid fa-code
        details: 可根据多个开发、运行环境进行参数配置，配置文件支持多文件拆分、组合。
        link: core/profile

      - title: 自定义组件
        icon: fa-solid fa-puzzle-piece
        details: 框架自带cron、data-config、etcd、gin、gorm等组件。也可根据需求自定义组件。
        link: component
footer: MIT Licensed | Create by <a href="https://github.com/cherry-game" target="_blank">Cherry Game</a>
---
