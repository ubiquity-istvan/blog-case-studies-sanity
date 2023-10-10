// ./nextjs-app/app/components/PreviewPost.tsx

"use client";

import { useParams } from "next/navigation";
import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import { caseStudyQuery, postQuery } from "@/sanity/lib/queries";
import Post from "./Post";

export default function PreviewCaseStudy({ post }: { post: SanityDocument }) {
  const params = useParams();
  const [data] = useLiveQuery(post, caseStudyQuery, params);

  return <Post post={data} />;
}
