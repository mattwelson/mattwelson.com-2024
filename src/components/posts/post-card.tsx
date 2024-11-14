import type { getPosts } from "@/lib/sanity/queries";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cva, type VariantProps } from "class-variance-authority";
import { PostImage } from "./post-image";
import { format } from "date-fns";
import { CategoryBadge } from "./category-badge";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import Link from "next/link";

const postCardVariants = cva(
  "overflow-hidden h-full min-h-44 w-full max-w-[36em]",
  {
    variants: {
      orientation: {
        horizontal: "grid grid-cols-[1fr_2fr] items-center",
        vertical: "flex flex-col-reverse",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

interface PostCardProps extends VariantProps<typeof postCardVariants> {
  post: Awaited<ReturnType<typeof getPosts>>[0];
  className?: string;
}

export function PostCard({ post, orientation, className }: PostCardProps) {
  return (
    <Link href={`/post/${post.slug}`}>
      <Card className={postCardVariants({ orientation, className })}>
        <PostImage
          image={post.image}
          className={
            orientation === "horizontal"
              ? "aspect-square"
              : "aspect-video w-full"
          }
        />
        <CardHeader className="space-y-2">
          <CategoryBadge post={post} className="" />
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{format(post.date, "dd MMM yyyy")}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export function PostCardSkeleton({
  orientation = "vertical",
  className,
}: Pick<PostCardProps, "orientation" | "className">) {
  return (
    <Card className={postCardVariants({ orientation, className })}>
      <Skeleton
        className={cn("rounded-none aspect-square", {
          "aspect-video w-full": orientation === "vertical",
        })}
      />
      <CardHeader className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-60" />
        <Skeleton className="h-4 w-24" />
      </CardHeader>
    </Card>
  );
}
