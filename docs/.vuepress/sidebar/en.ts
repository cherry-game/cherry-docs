import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Guide",
      icon: "lightbulb",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "Demo",
      icon: "book",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Component",
      icon: "book",
      prefix: "component/",
      link: "component/",
      children: "structure",
    },
  ],
});
