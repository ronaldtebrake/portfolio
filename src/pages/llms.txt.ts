import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '@/config';
import { llmsTxt, postsToLlmsItems } from '@/utils/llms';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

  // Convert posts to items
  const postItems = postsToLlmsItems(sortedPosts, (slug) => `/llms/${slug}.md`);

  // Add other pages
  const pages: typeof postItems = [
    { title: 'About', description: 'About Ronald te Brake', link: '/about' },
    { title: 'Uses', description: 'Tools and technologies I use', link: '/uses' },
    { title: 'Full Content', description: 'All posts in one file', link: '/llms-full.md' },
  ];

  return llmsTxt({
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE_URL,
    posts: postItems,
    pages: pages,
  });
};
