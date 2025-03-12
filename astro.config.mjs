import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";

import playformInline from "@playform/inline";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://tarascozynook.com',
  integrations: [sitemap(), playformInline(), playformCompress()],

  vite: {
    plugins: [tailwindcss()]
  }
});