# 安装nats

## 任选一种安装方式

### 官方安装指南
- https://docs.nats.io/running-a-nats-service/introduction/installation

### docker安装[推荐]
- https://docs.nats.io/running-a-nats-service/introduction/installation#installing-via-docker

### 安装包下载
-  https://github.com/nats-io/nats-server/releases

### brew安装
-  `brew install nats-server`

### 项目附带的windows版本[推荐]
-  https://github.com/cherry-game/examples/tree/master/3rd/nats-server


### 验证服务

> 启动后,窗口显示`Listening for client connections on 0.0.0.0:4222` 代表`nats`启动成功，默认监听`4222`端口 \
> \
> 正式环境请使用nats集群部署