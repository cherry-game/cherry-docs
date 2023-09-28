import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Guide",
      icon: "fa-solid fa-lightbulb",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "Demo",
      icon: "fa-solid fa-laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Core",
      icon: "fa-solid fa-book",
      prefix: "core/",
      link: "core/",
      children: "structure",
    },
    {
      text: "Component",
      icon: "fa-solid fa-book",
      prefix: "component/",
      link: "component/",
      children: "structure",
    },
  ],
});
