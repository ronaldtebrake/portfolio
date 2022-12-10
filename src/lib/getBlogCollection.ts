import { getCollection } from "astro:content";
import { SITE_URL } from '@/config';

const collection = "blog";

export default async () => {
  const posts = await getCollection(collection);

  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      ogImage: `${SITE_URL}og/${post.slug}.png`,
    },
  }));
};