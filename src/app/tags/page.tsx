import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';

export default function TagsIndexPage() {
  const posts = getBlogPosts();
  const tags = new Set(posts.flatMap(post => post.tags));

  return (
    <div>
      <h1>All Tags</h1>
      <div>
        {Array.from(tags).map(tag => (
          <Link 
            key={tag} 
            href={`/tags/${tag}`}
            className="mr-2 mb-2 inline-block px-3 py-1 bg-gray-200 rounded-full"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
} 