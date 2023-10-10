// ./nextjs-app/app/[slug]/page.tsx

import { SanityDocument } from "@sanity/client";
import { draftMode } from "next/headers";
import Post from "../../components/Sanity/Post";
import {
  caseStudiesQuery,
  caseStudyPathsQuery,
  caseStudyQuery,
  postPathsQuery,
  postQuery,
} from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { client } from "@/sanity/lib/client";
import PreviewPost from "../../components/Sanity/PreviewPost";
import PreviewProvider from "../../components/Sanity/PreviewProvider";
import PreviewCaseStudy from "@/app/components/Sanity/PreviewCaseStudy";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  // const posts = await client.fetch(postPathsQuery);
  const posts = await client.fetch(caseStudyPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  // const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  const post = await sanityFetch<SanityDocument>({
    query: caseStudyQuery,
    params,
  });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        {/* <PreviewPost post={post} /> */}
        <PreviewCaseStudy post={post} />
      </PreviewProvider>
    );
  }

  return <Post post={post} />;
}
