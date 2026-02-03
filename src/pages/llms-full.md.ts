import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '@/config';
import { llmsFullTxt, postsToLlmsFullItems } from '@/utils/llms';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

  return llmsFullTxt({
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    author: 'Ronald te Brake',
    site: SITE_URL,
    items: postsToLlmsFullItems(sortedPosts, (slug) => `/blog/${slug}/`),
  });
};
