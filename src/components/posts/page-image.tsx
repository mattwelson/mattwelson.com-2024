"use client";

import { imageLoader, type getPost } from "@/lib/sanity/queries";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function PageImage({
  image,
  className,
}: {
  className?: string;
  image: Awaited<ReturnType<typeof getPost>>["image"];
}) {
  return (
    <div className={cn("relative size-full", className)}>
      <Image
        src="Does not matter"
        alt=""
        width={image.asset.metadata.dimensions?.width}
        height={image.asset.metadata.dimensions?.height}
        className={cn("object-cover max-h-[600px]")}
        loader={({ width, quality = 100 }) =>
          imageLoader({ image, width, quality })
        }
      />
      {image.caption && (
        <figcaption className="text-center text-muted-foreground my-2 text-sm">
          {image.caption}
        </figcaption>
      )}
    </div>
  );
}
