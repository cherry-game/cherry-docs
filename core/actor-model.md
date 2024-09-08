# Actor模型

- 每个Actor独立运行在一个goroutine中，所有的逻辑都是串行处理
- Actor接收三种消息：本地消息(Local)、远程消息(Remote)、事件消息(Event)
  - 三种消息都有自己的队列(Queue)，每个队列依据FIFO原则进行消费
  - 本地消息(Local)，用于接收游戏客户端发送过来的本地消息
  - 远程消息(Remote)，用于Actor之间调用的远程消息
  - 事件消息(Event)，通过订阅/发布进行的事件消息
- Actor可以创建多个子Actor(ChildActor)，子Actor的消息由父Actor进行路由转发
- 通过cluster集群组件、discovery发现服务组件，进行跨节点的actor通信