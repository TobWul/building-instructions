import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { mdxSupportedComponents } from "./mdxSupportedComponents";
import { componentOverrides } from "./componentOverrides";
import remarkGfm from "remark-gfm";
import { remarkResolveRelativePaths } from "./remarkPlugins";
import { NavTree } from "@/app/types/NavTree";
import { rehypeCodeBlock, rehypeColorPreview } from "./rehypePlugins";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";

type Props = {
  source: any;
  navTree: NavTree;
  fileLocation: string;
  docsSlug: string;
};

export const MDX = ({ source, navTree, fileLocation, docsSlug }: Props) => {
  return (
    <MDXRemote
      source={source}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            [remarkResolveRelativePaths, { navTree, fileLocation, docsSlug }],
          ],
          rehypePlugins: [
            rehypeSanitize,
            // @ts-ignore
            [rehypeHighlight, {}],
            rehypeCodeBlock,
            rehypeColorPreview,
          ],
        },
      }}
      components={{ ...componentOverrides, ...mdxSupportedComponents }}
    />
  );
};
