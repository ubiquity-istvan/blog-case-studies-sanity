// ./nextjs-app/app/page.tsx

import { SanityDocument } from "next-sanity";
import Posts from "./components/Sanity/Posts";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "./components/Sanity/PreviewPosts";
import PreviewProvider from "./components/Sanity/PreviewProvider";

export const revalidate = 60;
export default async function Home() {
  // This is a comment from the stagin branch

  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <div className="flex flex-col items-center">
        <h1>This is the homepage.</h1>
        <div className="max-w-5xl">
          <PreviewProvider token={token}>
            <PreviewPosts posts={posts} />
          </PreviewProvider>
        </div>
      </div>
    );
  }

  return <Posts posts={posts} />;
}
