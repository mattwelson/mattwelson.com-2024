import { CategoryBadge } from "@/components/posts/category-badge";
import { PageImage } from "@/components/posts/page-image";
import { Text } from "@/components/typography/text";
import { Wrapper } from "@/components/typography/wrapper";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { getAllPostSlugs, getPost } from "@/lib/sanity/queries";
import { format } from "date-fns";
import type { PortableTextProps } from "next-sanity";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <div>
      <Wrapper>
        <div className="space-y-2 mb-2">
          <CategoryBadge post={post} className="" />
          <CardTitle className="font-serif text-4xl">{post.title}</CardTitle>
          <CardDescription>{format(post.date, "dd MMM yyyy")}</CardDescription>
        </div>
        <div className="mb-4 -mx-8">
          <PageImage image={post.image} />
        </div>
        <Text value={post.content as PortableTextProps["value"]} />
      </Wrapper>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}
