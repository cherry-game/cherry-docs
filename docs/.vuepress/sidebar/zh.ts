import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "新手指南",
      icon: "fa-solid fa-lightbulb",
      prefix: "guide/",
      link: "guide/",
      children: [
        "install-go.md",
        "install-ide.md",
        "install-nats.md",
        "first-code.md",
      ],
    },
    {
      text: "示例",
      icon: "fa-solid fa-laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: [
        "demo-chat.md",
        "demo-game-cluster.md",
      ],
    },
    {
      text: "核心功能",
      icon: "fa-solid fa-book",
      prefix: "core/",
      link: "core/",
      children: [
        "component.md",
        "cluster.md",
        "actor-model.md",
        "connector.md",
        "net-packet.md",
        "profile.md",
      ],
    },
    {
      text: "组件",
      icon: "fa-solid fa-puzzle-piece",
      prefix: "component/",
      link: "component/",
      children: [
        "data-config.md",
        "cron.md",
        "gorm.md",
        "etcd.md",
      ],
    },
  ],
});
