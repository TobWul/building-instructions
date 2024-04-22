import {
  DocumentationContainer,
  DocumentationSideNav,
  DocumentationTOC,
} from "./[pageSlug]/_features/docs";
import React from "react";
import { fetchDocumentationStructure } from "../_lib/fetchDocumentationStructure";
import { css } from "@/style/generated-styles/css";
import { notFound } from "next/navigation";
import { AIContextProvider } from "./[pageSlug]/_features/ai/AIContext";
import { AIPanel } from "./[pageSlug]/_features/ai/AIPanel";

type Props = {
  // Add your prop types here
  children: React.ReactNode;
  params: { docsSlug: string };
};

export default async function Layout({ params, children }: Props) {
  const result = await fetchDocumentationStructure(params.docsSlug);

  if (result.status === 404) {
    return notFound();
  }
  if (!result.data) {
    console.error();
    return null;
  }

  const { title, navTree } = result.data;

  return (
    <AIContextProvider>
      <DocumentationSideNav
        title={title}
        navTree={navTree}
        docsSlug={params.docsSlug}
      />
      <DocumentationContainer>
        <article
          className={css({
            maxWidth: "screen.md",
            mx: "auto",
          })}
        >
          {children}
        </article>
        <DocumentationTOC />
      </DocumentationContainer>
      <AIPanel />
    </AIContextProvider>
  );
}
