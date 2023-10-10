// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
     _id, title, slug, mainImage
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all case study slugs
export const caseStudyPathsQuery = groq`*[_type == "case-study" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all case studies
export const caseStudiesQuery = groq`*[_type == "case-study" && defined(slug.current)]{
  _id, title, slug, mainImage
}`;

// Get a single case study by its slug
export const caseStudyQuery = groq`*[_type == "case-study" && slug.current == $slug][0]{ 
  title, mainImage, body
}`;
