import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Type-check frontmatter using a schema
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .optional()
            .transform((str) => (str ? new Date(str) : undefined)),
        heroImage: image().optional(),
        tags: z.array(z.string()).optional(),
        category: z.enum(['product', 'people', 'process']),
        featured: z.boolean().default(false).optional(),
        ogImage: z.string().optional(),
    }),
});

export const collections = { blog };
