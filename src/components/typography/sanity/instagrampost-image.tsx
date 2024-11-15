"use client";

import { imageLoader, type getReferencedThing } from "@/lib/sanity/queries";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function InstagramPostImage({
  instagramPost,
}: {
  instagramPost: Awaited<ReturnType<typeof getReferencedThing>>;
}) {
  if (instagramPost._type !== "instagrampost") return null;

  return (
    <div className="mx-auto">
      <a
        href={instagramPost.url}
        className="relative rounded overflow-hidden size-[400px]"
      >
        <Image
          src="Does not matter"
          alt=""
          width={400}
          height={400}
          className={cn("object-cover aspect-square")}
          loader={({ width, quality = 100 }) =>
            imageLoader({ image: instagramPost.image, width, quality })
          }
        />
      </a>
    </div>
  );
}
