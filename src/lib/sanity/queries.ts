import { createClient } from "next-sanity";
import { makeSafeQueryRunner, q, sanityImage } from "groqd";
import { env } from "@/env";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

export function imageLoader({
  image,
  width,
  quality,
}: {
  image: SanityImageSource;
  width: number;
  quality: number;
}) {
  return imageUrlBuilder(client)
    .image(image)
    .width(width)
    .quality(quality)
    .url();
}

export const runQuery = makeSafeQueryRunner(
  (query, params?: Record<string, number | string | undefined>) =>
    client.fetch(query, params)
);

export function getPosts(params: { category?: string } | undefined) {
  return runQuery(
    q("*")
      .filterByType("post")
      .filter(
        params?.category ? `lower(category->title) == "${params.category}"` : ""
      )
      .order("_createdAt desc")
      .grab$({
        _id: q.string(),
        title: q.string(),
        image: sanityImage("image"),
        slug: q.slug("slug"),
        date: ["_createdAt", q.date()],
        categoryColour: ["category->colour", q.string()],
        categoryTitle: ["category->title", q.string()],
      })
  );
}

export function getPost(slug: string) {
  const query = q(`*[slug.current == '${slug}'][0]`).grab$({
    _id: q.string(),
    title: q.string(),
    image: sanityImage("image", {
      withAsset: ["base", "dimensions"],
      additionalFields: {
        caption: q.string(),
      },
    }),
    slug: q.slug("slug"),
    date: ["_createdAt", q.date()],
    categoryColour: ["category->colour", q.string()],
    categoryTitle: ["category->title", q.string()],
    content: q("content")
      .filter()
      .select({
        '_type == "block"': ["{...}", q.contentBlock()],
        '_type == "spotify"': q("").grab$({
          _type: q.string(),
          url: q.string(),
        }),
        '_type == "youtube"': q("").grab$({
          _type: q.string(),
          url: q.string(),
        }),
        '_type == "reference"': ["reference->{...}", q.unknown()],
        '_type == "metaimage"': sanityImage("", {
          withAsset: ["base", "dimensions"],
          additionalFields: {
            caption: q.string(),
          },
        }),
        default: {
          _key: q.string(),
          _type: ['"unsupported"', q.literal("unsupported")],
          unsupportedType: ["_type", q.string()],
        },
      }),
  });
  return runQuery(query);
}

export function getInstagramPosts(count = 6) {
  return runQuery(
    q("*")
      .filterByType("instagrampost")
      .order("_createdAt desc")
      .grab$({
        _id: q.string(),
        image: sanityImage("image"),
        url: q.string(),
      })
      .slice(0, count - 1)
  );
}

export function getAllCategoryNames() {
  return runQuery(
    q("*").filterByType("category").grabOne$("title", q.string().toLowerCase())
  );
}

export function getAllPostSlugs() {
  return runQuery(
    q("*")
      .filterByType("post")
      .grab$({
        slug: q.slug("slug"),
      })
  );
}
