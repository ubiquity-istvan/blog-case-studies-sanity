// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Posts from "./Posts";
import { caseStudiesQuery, postsQuery } from "@/sanity/lib/queries";
import CaseStudies from "./CaseStudies";

export default function PreviewCaseStudies({
  posts = [],
}: {
  posts: SanityDocument[];
}) {
  const [data] = useLiveQuery(posts, caseStudiesQuery);

  return <CaseStudies posts={data} />;
  // return <Posts posts={data} />;
}
