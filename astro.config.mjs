import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  site: 'https://tarascozynook.com',
  integrations: [tailwind(), sitemap(), playformInline(), playformCompress()]
});