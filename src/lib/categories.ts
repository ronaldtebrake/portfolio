export const BLOG_CATEGORIES = ['product', 'people', 'process'] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const categoryLabels: Record<BlogCategory, string> = {
	product: 'Product',
	people: 'People',
	process: 'Process',
};

export function isBlogCategory(value: string | undefined): value is BlogCategory {
	return value !== undefined && (BLOG_CATEGORIES as readonly string[]).includes(value);
}
