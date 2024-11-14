"use client";

import { imageLoader, type getInstagramPosts } from "@/lib/sanity/queries";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function InstagramPhoto({
  post,
}: {
  post: Awaited<ReturnType<typeof getInstagramPosts>>[0];
}) {
  return (
    <a
      key={post._id}
      href={post.url}
      className="relative rounded overflow-hidden size-[200px]"
    >
      <Image
        src="Does not matter"
        alt=""
        width={200}
        height={200}
        className={cn("object-cover aspect-square")}
        loader={({ width, quality = 100 }) =>
          imageLoader({ image: post.image, width, quality })
        }
      />
    </a>
  );
}
