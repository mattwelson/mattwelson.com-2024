import { PostList, PostListSkeleton } from "@/components/posts/post-list";
import { Wrapper } from "@/components/typography/wrapper";
import { Suspense } from "react";

export default function Home() {
  return (
    <Wrapper>
      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
    </Wrapper>
  );
}
