import { NavTree } from "@/app/_types";
import { slugify } from "@/utils";
import { navigateNavTree } from "@/utils/navigateNavTree";
import path from "path";

export const resolveMarkdownFileLink = (
  node: any,
  navTree: NavTree,
  fileLocation: string,
  docsSlug: string
) => {
  const docsFolder = `${process.env.NEXT_PUBLIC_DOCS_FOLDER}/${docsSlug}`;
  const isAbsolute = node.url.startsWith("/");

  let targetFileAbsolutePath = "";

  if (!isAbsolute) {
    const fileFolder = fileLocation.split("/").slice(0, -1).join("/");
    targetFileAbsolutePath = path.join(fileFolder, node.url);
  } else {
    // Remove leading slash
    targetFileAbsolutePath = node.url.slice(1);
  }

  let newUrl = "/undefined";
  navigateNavTree(navTree, (title, value) => {
    const absolutePath = path.join(docsFolder, value);

    if (absolutePath === targetFileAbsolutePath) {
      newUrl = `/docs/${docsSlug}/${slugify(title)}`;
    }
  });
  node.url = newUrl;
};
