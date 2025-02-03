import matter from 'gray-matter';

export function getBlogPost(slug: string): BlogPost {
  // ... existing code ...
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags || [], // Add default empty array if no tags
    content
  };
} 