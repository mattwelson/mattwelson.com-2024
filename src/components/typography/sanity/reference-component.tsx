import { getReferencedThing } from "@/lib/sanity/queries";
import { InstagramPostImage } from "./instagrampost-image";

/** This bit is pretty messy, I want to resolve a reference server side then render an image client side */
export async function ReferenceComponent({ reference }: { reference: string }) {
  const result = await getReferencedThing(reference);
  return <InstagramPostImage instagramPost={result} />;
}
