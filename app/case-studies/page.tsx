// // ./nextjs-app/app/page.tsx

// import { SanityDocument } from "next-sanity";
// import Posts from "../components/Sanity/Posts";

// import CaseStudies from "../components/Sanity/CaseStudies";
// import {
//   caseStudiesQuery,
//   caseStudyQuery,
//   postsQuery,
// } from "@/sanity/lib/queries";
// import { sanityFetch } from "@/sanity/lib/sanityFetch";

// export default async function Home() {
//   const posts = await sanityFetch<SanityDocument[]>({
//     query: caseStudiesQuery,
//   });

//   return <CaseStudies posts={posts} />;
//   //   return <Posts posts={posts} />;
// }

// ./nextjs-app/app/page.tsx

import { SanityDocument } from "next-sanity";
import Posts from "../components/Sanity/Posts";
import { caseStudiesQuery, postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "../components/Sanity/PreviewPosts";
import PreviewProvider from "../components/Sanity/PreviewProvider";
import PreviewCaseStudies from "../components/Sanity/PreviewCaseStudies";
import CaseStudies from "../components/Sanity/CaseStudies";

export const revalidate = 10;

export default async function Home() {
  // This is a comment from the stagin branch

  const posts = await sanityFetch<SanityDocument[]>({
    query: caseStudiesQuery,
  });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <div className="flex flex-col items-center">
        <h1>This is the homepage. gelo</h1>
        <div className="max-w-5xl">
          <PreviewProvider token={token}>
            {/* <PreviewPosts posts={posts} /> */}
            <PreviewCaseStudies posts={posts} />
          </PreviewProvider>
        </div>
      </div>
    );
  }

  return <CaseStudies posts={posts} />;
  // return <Posts posts={posts} />;
}
