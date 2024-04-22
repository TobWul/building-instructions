export const docsPageUrl = (docsSlug: string, slug: string) =>
  `/${process.env.NEXT_PUBLIC_DOCS_FOLDER}/${docsSlug}/${slug}`;
