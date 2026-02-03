import type { GetStaticPaths, APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '@/config';
import { llmsPost } from '@/utils/llms';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
};

export const GET: APIRoute = ({ props }) => {
  return llmsPost({
    post: props.post,
    site: SITE_URL,
    link: `/blog/${props.post.slug}/`,
  });
};
