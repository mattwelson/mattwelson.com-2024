import { getPosts } from "@/lib/sanity/queries";
import { PostCard, PostCardSkeleton } from "./post-card";

export async function PostList({ category }: { category?: string }) {
  const posts = await getPosts({
    category,
  });
  console.log({ posts, category });

  return (
    <div className="grid gap-16">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export async function PostListSkeleton() {
  return [1, 2, 3].map((id) => <PostCardSkeleton key={id} />);
}
