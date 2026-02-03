import type { CollectionEntry } from 'astro:content';

// Basic item for the index - just enough to create a link
export interface LlmsItem {
  title: string;
  description: string;
  link: string;
}

// Extended item for full content - includes the actual post data
export interface LlmsFullItem extends LlmsItem {
  pubDate: Date;
  category: string;
  body: string;
}

// Config for the index endpoint
interface LlmsTxtConfig {
  name: string;
  description: string;
  site: string;
  posts: LlmsItem[];
  pages: LlmsItem[];
}

// Config for the full content endpoint
interface LlmsFullTxtConfig {
  name: string;
  description: string;
  author: string;
  site: string;
  items: LlmsFullItem[];
}

// Config for individual post endpoints
interface LlmsPostConfig {
  post: CollectionEntry<'blog'>;
  site: string;
  link: string;
}

// Document builder - normalizes newlines and returns Response
function doc(...sections: (string | string[])[]): Response {
  const content = sections
    .flat()
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return new Response(content + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

// Document builder for markdown content
function docMarkdown(...sections: (string | string[])[]): Response {
  const content = sections
    .flat()
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return new Response(content + '\n', {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}

// Format date as YYYY-MM-DD
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Build header with title and description
function header(name: string, description: string): string[] {
  return [`# ${name}`, '', `> ${description}`];
}

// Build link list section
function linkList(title: string, items: LlmsItem[], site: string): string[] {
  return [
    '',
    `## ${title}`,
    ...items.map((item) => `- [${item.title}](${site}${item.link}): ${item.description}`),
  ];
}

// Build post metadata lines
function postMeta(site: string, link: string, pubDate: Date, category: string): string[] {
  return [`URL: ${site}${link}`, `Published: ${formatDate(pubDate)}`, `Category: ${category}`];
}

// Index generator
export function llmsTxt(config: LlmsTxtConfig): Response {
  const sections = [
    header(config.name, config.description),
    linkList('Blog Posts', config.posts, config.site),
    linkList('Pages', config.pages, config.site),
  ];

  return doc(...sections);
}

// Full content generator
export function llmsFullTxt(config: LlmsFullTxtConfig): Response {
  const head = [
    ...header(config.name, config.description),
    '',
    `Author: ${config.author}`,
    `Site: ${config.site}`,
    '',
    '---',
  ];

  const posts = config.items.flatMap((item) => [
    '',
    `## ${item.title}`,
    '',
    ...postMeta(config.site, item.link, item.pubDate, item.category),
    '',
    `> ${item.description}`,
    '',
    item.body,
    '',
    '---',
  ]);

  return docMarkdown(head, posts);
}

// Individual post generator
export function llmsPost(config: LlmsPostConfig): Response {
  const { post, site, link } = config;
  const { title, description, pubDate, category } = post.data;

  return docMarkdown(
    `# ${title}`,
    '',
    `> ${description}`,
    '',
    ...postMeta(site, link, pubDate, category),
    '',
    post.body ?? '',
  );
}

// Transform posts to basic items
export function postsToLlmsItems(
  posts: CollectionEntry<'blog'>[],
  formatUrl: (slug: string) => string,
): LlmsItem[] {
  return posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    link: formatUrl(post.slug),
  }));
}

// Transform posts to full items
export function postsToLlmsFullItems(
  posts: CollectionEntry<'blog'>[],
  formatUrl: (slug: string) => string,
): LlmsFullItem[] {
  return posts.map((post) => ({
    ...postsToLlmsItems([post], formatUrl)[0],
    pubDate: post.data.pubDate,
    category: post.data.category,
    body: post.body ?? '',
  }));
}
