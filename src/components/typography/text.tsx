import {
  PortableText,
  type PortableTextProps,
  type PortableTextReactComponents,
} from "next-sanity";
import { SpotifyEmbed } from "./sanity/spotify-embed";
import { YoutubeEmbed } from "./sanity/youtube-embed";
import { PageImage } from "../posts/page-image";
import { ReferenceComponent } from "./sanity/reference-component";

const components = {
  marks: {
    link: ({ children, value }) => (
      <a
        className="text-blue-800 dark:text-blue-300 underline"
        href={value.href}
      >
        {children}
      </a>
    ),
  },
  block: {
    normal: ({ children }) => <p className="text-lg">{children}</p>,
    h2: ({ children }) => (
      <h2 className="text-2xl font-serif font-bold mt-4 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-serif font-bold mt-4 mb-2">{children}</h3>
    ),
  },
  types: {
    spotify: SpotifyEmbed,
    youtube: YoutubeEmbed,
    metaimage: ({ value }) => (
      <div className="my-4 -mx-8">
        <PageImage image={value} />
      </div>
    ),
    reference: ({ value }) => <ReferenceComponent reference={value._ref} />,
    unsupported: ({ value }: { value: { unsupportedType: string } }) => (
      <div className="border-red-500 rounded bg-red-100 p-2 text-red-500">
        Unsupported: {value.unsupportedType}
      </div>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc list-inside">{children}</li>
    ),
  },
} satisfies Partial<PortableTextReactComponents>;

export function Text({ value }: PortableTextProps) {
  return <PortableText value={value} components={components} />;
}
