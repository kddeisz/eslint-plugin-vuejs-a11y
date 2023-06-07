import { defineConfig } from "vitepress";
import { rules } from "./rulesForSidebar";
import { version } from "../../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vuejs-accessibility",
  description:
    "An eslint plugin for checking accessibility rules from within .vue files.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: version,
        items: [
          {
            text: "Changelog",
            link: "https://github.com/Lehoczky/vue-keycloak/blob/master/CHANGELOG.md"
          }
        ]
      }
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/" },
          { text: "Rule Overview", link: "/rule-overview/index" }
        ]
      },
      {
        text: "Rules",
        items: rules
      }
    ],

    editLink: {
      pattern: "https://github.com/vue-a11y/edit/master/docs/:path"
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility"
      }
    ],

    search: {
      provider: "local"
    }
  }
});