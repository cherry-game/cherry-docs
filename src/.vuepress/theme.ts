import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme(
  {
    darkmode:"toggle",
    
    //iconAssets: "fontawesome-with-brands",
    iconAssets: [
      "/assets/fontawesome-free-6.4.2/js/brands.js",
      "/assets/fontawesome-free-6.4.2/js/solid.js",
      "/assets/fontawesome-free-6.4.2/js/fontawesome.js",
    ],

    logo: "/logo.svg",

    repo : "cherry-game/cherry",
    docsRepo : "cherry-game/cherry-docs",
    docsDir :"/docs",
    docsBranch :"master",

    pageInfo: false,
    contributors : false,
    lastUpdated: false,
    backToTop : true,
    headerDepth: 0,
    toc: false,
    editLink : false,
    breadcrumb : true,

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

        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
      },
      
    },
  },
  { custom: true }
);
