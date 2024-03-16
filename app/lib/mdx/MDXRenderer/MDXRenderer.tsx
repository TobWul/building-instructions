import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { mdxSupportedComponents } from "..";
import { componentOverrides } from "./componentOverrides";
import gfm from "remark-gfm";

type Props = {
  source: any;
};

export const MDXRenderer = ({ source }: Props) => {
  return (
    <MDXRemote
      source={source}
      options={{ parseFrontmatter: true, mdxOptions: { remarkPlugins: [gfm] } }}
      components={{ ...componentOverrides, ...mdxSupportedComponents }}
    />
  );
};
