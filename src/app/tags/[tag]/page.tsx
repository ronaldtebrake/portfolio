import { getBlogPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const tags = new Set(posts.flatMap(post => post.tags));
  
  return Array.from(tags).map((tag) => ({
    tag: tag,
  }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getBlogPosts();
  const filteredPosts = posts.filter(post => 
    post.tags.includes(params.tag)
  );

  return (
    <div>
      <h1>Posts tagged with "{params.tag}"</h1>
      {/* Render your filtered blog posts here */}
    </div>
  );
} 