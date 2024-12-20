import { PostList, PostListSkeleton } from "@/components/posts/post-list";
import { Wrapper } from "@/components/typography/wrapper";
import { getAllCategoryNames } from "@/lib/sanity/queries";
import { Suspense } from "react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  return (
    <Wrapper>
      <Suspense fallback={<PostListSkeleton />}>
        <PostList category={categorySlug} />
      </Suspense>
    </Wrapper>
  );
}

export async function generateStaticParams() {
  const names = await getAllCategoryNames();
  return names.map((categorySlug) => ({ categorySlug }));
}
