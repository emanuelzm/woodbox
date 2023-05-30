import { defineConfig } from 'astro/config';

/*
// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
  },
  integrations: [mdx({
    drafts: true,
  })],
});*/
import tailwind from "@astrojs/tailwind";
export default defineConfig({
  integrations: [tailwind()]
});