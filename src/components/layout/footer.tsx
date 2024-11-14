import { FaGithub, FaInstagram, FaStrava } from "react-icons/fa";
import { Wrapper } from "../typography/wrapper";
import { InstagramPosts } from "./instagram-posts";

export async function Footer() {
  return (
    <footer className="mt-8">
      <Wrapper className="bg-accent text-accent-foreground">
        <InstagramPosts />
      </Wrapper>
      <Wrapper className="gap-8 py-8">
        <div className="flex justify-center gap-8">
          <a
            href="https://www.strava.com/athletes/37049548"
            title="Strava"
            target="_blank"
            rel="noopener nofollow noindex"
            className="duration-200 ease-in-out hover:text-orange-500"
          >
            <FaStrava className="size-8" />
          </a>
          <a
            href="https://www.instagram.com/m.welson/"
            title="Instagram"
            target="_blank"
            rel="noopener nofollow noindex"
            className="duration-200 ease-in-out hover:text-purple-500"
          >
            <FaInstagram className="size-8" />
          </a>
        </div>
        <div className="text-center max-w-sm mx-auto">
          Made by Matt Welson, using some cool stuff made by smarter people.
          Nextjs, Sanity.io, Groqd, Shadcn/ui. Thanks for reading!
        </div>
        <a
          href="https://github.com/mattwelson"
          rel="noopener nofollow"
          className="justify-self-center text-slate-700 hover:text-slate-950"
        >
          <FaGithub className="size-12" />
        </a>
      </Wrapper>
    </footer>
  );
}
