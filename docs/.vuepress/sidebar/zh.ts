import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "新手指南",
      icon: "lightbulb",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "示例",
      icon: "book",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "组件",
      icon: "book",
      prefix: "component/",
      link: "component/",
      children: "structure",
    },
  ],
});
