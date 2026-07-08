import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import serviceWorker from "astrojs-service-worker";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import mermaid from 'astro-mermaid';

import playformCompress from "@playform/compress";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(projectRoot, 'src/content/blog');

function getBlogLastmodByPath() {
  const map = new Map();

  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith('.md')) continue;

    const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
    const slug = file.replace(/\.md$/, '');
    const pubDate = content.match(/^pubDate:\s*(.+)$/m)?.[1]?.trim();
    const updatedDate = content.match(/^updatedDate:\s*(.+)$/m)?.[1]?.trim();
    const dateValue = updatedDate ?? pubDate;

    if (!dateValue) continue;

    map.set(
      `/blog/${slug}/`,
      new Date(dateValue.replace(/^['"]|['"]$/g, '')).toISOString(),
    );
  }

  return map;
}

const blogLastmodByPath = getBlogLastmodByPath();

function shouldExcludeFromSitemap(page) {
  return page.includes('/goodies') || page.includes('/snippets');
}

export default defineConfig({
  site: 'https://www.ronaldtebrake.nl/',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !shouldExcludeFromSitemap(page),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = blogLastmodByPath.get(pathname);
        if (lastmod) {
          return { ...item, lastmod };
        }
        return item;
      },
    }),
    tailwind(),
    compress(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/llms/', '/llms.txt', '/llms-full.md', '/og/'],
        },
      ],
    }),
    serviceWorker(),
    webmanifest({
      name: 'Blog by Ronald te Brake',
      icon: {
        "src": "src/images/maskable-icon.png",
        "sizes": "196x196",
        "type": "image/png",
        "purpose": "maskable"
      },
      short_name: 'Blog by Ronald',
      description: 'People, process and product development by Ronald te Brake',
      start_url: '/',
      theme_color: '#F7F7F7',
      background_color: '#F7F7F7',
      display: 'standalone',
    }),
    playformCompress(),
    mermaid({
      theme: 'forest',
      autoTheme: true
    })
  ],
  prefetch: {
    prefetchAll: true
  }
});
