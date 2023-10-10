// ./nextjs-app/app/_components/Posts.tsx
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
export const revalidate = 10;

export default function CaseStudies({
  posts = [],
}: {
  posts: SanityDocument[];
}) {
  const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

  console.log(posts[0].mainImage.asset._ref);

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-2xl p-4 font-bold text-center">
          Recent case studies: <span className="font-normal">{title}</span>
        </h1>
        <div className="h-[1px] bg-black opacity-30"></div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link
              key={post._id}
              //   href={post.slug.current}
              href={`/case-studies/${post.slug.current}`}
              className="p-4 bg-green-50 hover:bg-green-200 border rounded-xl border-green-900 border-opacity-30 flex flex-col gap-4"
            >
              <Image
                src={builder.image(post.mainImage).width(700).height(700).url()}
                height={700}
                width={700}
                quality={100}
                alt={post?.mainImage?.alt}
                className="w-full"
              />
              <h2 className="font-bold">{post.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
