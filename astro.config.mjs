import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import serviceWorker from "astrojs-service-worker";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";

import playformCompress from "@playform/compress";

export default defineConfig({
  site: 'https://www.ronaldtebrake.nl/',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    compress(),
    robotsTxt(),
    serviceWorker(),
    webmanifest({
      name: 'Blog by Ronald te Brake',
      icon: {
        "src": "src/images/logo-letter.svg",
        "sizes": "196x196",
        "type": "image/svg",
        "purpose": "maskable"
      },
      short_name: 'Blog by Ronald',
      description: 'People, process and product development by Ronald te Brake',
      start_url: '/',
      theme_color: '#FFFFFF',
      background_color: '#F7F7F7',
      display: 'standalone',
    }),
    playformCompress()
  ],
  prefetch: {
    prefetchAll: true
  }
});