import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        heroImage: image().optional(),
        heroImageAlt: z.string().optional(),
        heroImageCredit: z
            .object({
                photoBy: z.string(),
                url: z.string().url(),
            })
            .optional(),
        tags: z.array(z.string()).optional(),
        category: z.enum(['product', 'people', 'process']),
        featured: z.boolean().default(false).optional(),
        ogImage: z.string().optional(),
    }),
});

export const collections = { blog };
