import { Response } from "@/app/_types/Response";
import { fetchDocumentationStructure } from "./fetchDocumentationStructure";
import { findMarkdownFileInNav } from "./findMarkdownFileInNav";

const fs = require("fs");
const path = require("path");

export const fetchDocumentationPage = async (
  docsSlug: string,
  pageSlug: string
): Promise<Response<{ source: string; mdxPath: string }>> => {
  const navTree = await fetchDocumentationStructure(docsSlug);

  const foundPage = findMarkdownFileInNav(navTree, pageSlug);

  if (!foundPage) {
    return { status: 404, data: null };
  }

  const mdxPath = path.join(
    `${process.env.NEXT_PUBLIC_DOCS_FOLDER}/${docsSlug}/${foundPage}`
  );

  try {
    const source = fs.readFileSync(mdxPath, "utf8");
    return { status: 200, data: { source, mdxPath } };
  } catch (error) {
    console.error("Error reading mdx file", error);
    return { status: 404, data: null };
  }
};
