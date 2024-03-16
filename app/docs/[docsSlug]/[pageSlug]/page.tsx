import { serialize } from "next-mdx-remote/serialize";

import { MDXRenderer } from "../../../lib/mdx";
import { frontMatterParser } from "@/app/lib/mdx/frontMatterParser";
import { fetchDocumentationPage } from "../../lib/fetchDocumentationPage";
import { notFound } from "next/navigation";
import { Content } from "@/components";

export default async function Page({
  params,
}: {
  params: { docsSlug: string; pageSlug: string };
}) {
  const source = await fetchDocumentationPage(params.docsSlug, params.pageSlug);

  if (source === "404") {
    return notFound();
  }

  const { frontmatter } = await serialize(source, { parseFrontmatter: true });
  const metadata = frontMatterParser(frontmatter);

  return (
    <>
      <Content>
        <h1>{metadata.title}</h1>
        <p>{metadata.owner}</p>
        <MDXRenderer source={source} />
      </Content>
    </>
  );
}
