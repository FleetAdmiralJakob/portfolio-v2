import { defineConfig } from "astro/config";
import metaTags from "astro-meta-tags";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [metaTags(), tailwind(), sitemap()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  site: "https://roessner.tech",
});
