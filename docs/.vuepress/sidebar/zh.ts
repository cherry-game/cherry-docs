import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "新手指南",
      icon: "lightbulb",
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
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: [
        "demo-chat.md",
        "demo-game-cluster.md",
      ],
    },
    {
      text: "核心功能",
      icon: "book",
      prefix: "core/",
      link: "core/",
      children: [
        "1.md",
        "2.md",
      ],
    },
    {
      text: "组件",
      icon: "puzzle-piece",
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
