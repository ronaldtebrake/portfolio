import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const collectionEntries = await getCollection('blog');

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
// to { 'post.md': { title: 'Example', description: '' } }
const pages = Object.fromEntries(collectionEntries.map(({ slug, data }) => [slug, data]));

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  
  pages: pages,
 
  getImageOptions: (path, page) => ({
    title: page.title,
    logo: {
      path: './src/images/logo-letters.png',
    },
    padding: 60,
    bgImage: { path: './src/images/og-bg.png' },
    bgGradient: [
      [220, 220, 220],
      [247, 247, 247],
    ],
    font: {
      title: {
        color: [3, 7, 8],
        size: 84,
        families: [
          'GeneralSans-Regular',
        ],
      },
    },
    fonts: [
      './src/styles/fonts/GeneralSans-Regular.ttf',
    ],
  }),
});

