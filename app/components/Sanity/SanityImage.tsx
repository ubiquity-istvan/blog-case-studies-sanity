import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { createClient } from "next-sanity";

const sanityConfig = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});
// @ts-ignore
export default function SanityImage({ asset }) {
  const imageProps = useNextSanityImage(sanityConfig, asset);

  if (!imageProps) return null;

  return (
    <Image
      // @ts-ignore
      {...imageProps}
      layout="responsive"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
}
