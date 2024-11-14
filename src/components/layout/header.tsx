import { headerFont } from "@/app/layout";
import { MegaMenu } from "./mega-menu";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { ThemeButton } from "../dark-mode/theme-button";
import { getPosts } from "@/lib/sanity/queries";
import { PostCard } from "../posts/post-card";
import Link from "next/link";

export async function Header() {
  const posts = await getPosts({});

  return (
    <header className="bg-background">
      <div className="mx-auto container flex justify-between items-center p-2">
        <Link href="/" className={`${headerFont.className} text-xl`}>
          Matt Welson
        </Link>
        <div className="flex gap-4">
          <ThemeButton />
          <MegaMenu
            title="Some More Posts"
            description="Check out my other posts"
          >
            <ScrollArea>
              <div className="flex gap-4">
                {posts.map((post) => (
                  <PostCard
                    orientation="horizontal"
                    key={post._id}
                    post={post}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </MegaMenu>
        </div>
      </div>
    </header>
  );
}
