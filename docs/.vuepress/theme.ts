import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme(
  {
    darkmode:"toggle",
    
    iconAssets: "fontawesome-with-brands",

    logo: "/logo.svg",

    docsRepo : "cherry-game/cherry-docs",
    docsDir :"/docs",
    docsBranch :"master",

    locales: {
      "/zh/": {
        // navbar
        navbar: zhNavbar,

        // sidebar
        sidebar: zhSidebar,

        footer: "MIT Licensed | Create by <a href=\"https://github.com/cherry-game\" target=\"_blank\">Cherry Game</a>",

        displayFooter: true,

        // page meta
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },

      "/en/": {
        // navbar
        navbar: enNavbar,

        // sidebar
        sidebar: enSidebar,

        footer: "MIT Licensed | Create by <a href=\"https://github.com/cherry-game\" target=\"_blank\">Cherry Game</a>",

        displayFooter: true,

        metaLocales: {
          editLink: "Edit this page on GitHub",
        },
      },
    },

    plugins: {
      // All features are enabled for demo, only preserve features you need here
      mdEnhance: {
        align: true,
        attrs: true,
        chart: true,
        codetabs: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        katex: true,
        mark: true,
        mermaid: true,
        playground: {
          presets: ["ts", "vue"],
        },
        presentation: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
      },

      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: true,
        cachePic: true,
        appendBase: true,
        apple: {
          icon: "/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          icons: [
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Demo",
              short_name: "Demo",
              url: "/demo/",
              icons: [
                {
                  src: "/assets/icon/guide-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
            },
          ],
        },
      },
    },
  },
  { custom: true }
);
