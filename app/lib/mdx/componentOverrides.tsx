import React from "react";
import { SectionTitle, PageLink } from "@/components";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const componentOverrides = {
  h1: (props: any) => <SectionTitle tag="h1" {...props} />,
  h2: (props: any) => <SectionTitle tag="h2" {...props} />,
  h3: (props: any) => <SectionTitle tag="h3" {...props} />,
  h4: (props: any) => <SectionTitle tag="h4" {...props} />,
  h5: (props: any) => <SectionTitle tag="h5" {...props} />,
  h6: (props: any) => <SectionTitle tag="h6" {...props} />,
  a: (props: any) => <PageLink {...props} />,
  sup: (props: any) => <sup {...props} />,
  // pre: CodeBlock,
};
