"use client";

import { imageLoader, type getPosts } from "@/lib/sanity/queries";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function PostImage({
  image,
  className,
}: {
  className?: string;
  image: Awaited<ReturnType<typeof getPosts>>[0]["image"];
}) {
  return (
    <div className={cn("relative size-full", className)}>
      <Image
        src="Does not matter"
        alt=""
        fill
        className={cn("object-cover")}
        loader={({ width, quality = 100 }) =>
          imageLoader({ image, width, quality })
        }
      />
    </div>
  );
}
