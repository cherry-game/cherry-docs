import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const base = <"/" | `/${string}/`>process.env["BASE"] || "/";

export default defineUserConfig({
  base,

  dest: "./dist",
  lang: "zh-CN",
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
  },

  theme,

  shouldPrefetch: false,
});
