import { serialize } from "next-mdx-remote/serialize";

import { MDX } from "@/app/_lib/mdx";
import { frontMatterParser } from "@/app/_lib/mdx/frontMatterParser";
import { fetchDocumentationPage } from "../../_lib/fetchDocumentationPage";
import { notFound } from "next/navigation";
import { Content, SelectText } from "@/components";
import { css } from "@/style/generated-styles/css";
import { fetchDocumentationStructure } from "../../_lib/fetchDocumentationStructure";
import Head from "next/head";
import { AIContextProvider } from "@/app/docs/[docsSlug]/[pageSlug]/_features/ai/AIContext";
import { DocumentationContainer } from "./_features/docs/DocumentationContainer/DocumentationContainer";

export default async function Page({
  params,
}: {
  params: { docsSlug: string; pageSlug: string };
}) {
  const page = await fetchDocumentationPage(params.docsSlug, params.pageSlug);
  const structure = await fetchDocumentationStructure(params.docsSlug);

  if (page.status === 404 || structure.status === 404) {
    return notFound();
  }
  if (!page.data || !structure.data) {
    console.error();
    return null;
  }

  const { frontmatter } = await serialize(page.data.source, {
    parseFrontmatter: true,
  });
  const metadata = frontMatterParser(frontmatter);

  return (
    <>
      <h1>{metadata.title}</h1>
      <p>{metadata.owner}</p>
      <MDX
        source={page.data.source}
        navTree={structure.data.navTree}
        fileLocation={page.data.mdxPath}
        docsSlug={params.docsSlug}
      />
      <SelectText />
    </>
  );
}
