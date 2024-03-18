import { NavTree } from "@/app/types/NavTree";
import { visit } from "unist-util-visit";
import { resolveMarkdownFileLink } from "./resolveMarkdownFileLink";

/**
 *
 * @param navTree the JSON object representing the nav.yml file
 * @param fileLocation the absolute location from the root of the project
 * @param docsSlug the slug of the documentation
 * @returns
 */
export const remarkResolveRelativePaths = ({
  navTree,
  fileLocation,
  docsSlug,
}: {
  navTree: NavTree;
  fileLocation: string;
  docsSlug: string;
}) => {
  return (tree: any) => {
    visit(tree, "link", (node: any) => {
      if (!node.url.includes(".md")) {
        if (node.url.startsWith("http")) {
          return;
        }

        if (!node.url.includes(docsSlug)) {
          node.url = `/docs/${docsSlug}/${node.url}`;
          return;
        }
      }
      resolveMarkdownFileLink(node, navTree, fileLocation, docsSlug);
    });
  };
};
