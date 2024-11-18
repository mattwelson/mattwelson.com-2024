import { getInstagramPosts } from "@/lib/sanity/queries";
import { InstagramPhoto } from "./instagram-photo";

export async function InstagramPosts({ count = 6 }: { count?: number }) {
  const posts = await getInstagramPosts(count);
  return (
    <div className="py-16">
      <h2 className="mb-4 text-xl font-serif font-semibold text-purple-800 dark:text-purple-500 text-center md:text-left">
        From Instagram
      </h2>
      <div className="grid sm:grid-cols-[200px_200px] md:grid-cols-[200px_200px_200px] gap-4 justify-center items-center">
        {posts.map((post) => (
          <InstagramPhoto key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
