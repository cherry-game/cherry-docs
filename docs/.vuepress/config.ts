import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base : "/",
  dest: "./dist",
  lang: "zh-CN",
  title : "Cherry Game",

  locales: {
    "/zh/": {
      lang: "zh-CN",
    },
    // "/en/": {
    //   lang: "en-US",
    // },
  },

  theme,

  shouldPrefetch: false,
});
