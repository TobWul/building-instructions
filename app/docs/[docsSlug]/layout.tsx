import {
  DocumentationSideNav,
  DocumentationTOC,
} from "@/app/lib/features/documentation";
import React from "react";
import { fetchDocumentationStructure } from "../utils/fetchDocumentationStructure";
import { css } from "@/style/generated-styles/css";
import { notFound } from "next/navigation";

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
    <>
      <DocumentationSideNav
        title={title}
        navTree={navTree}
        docsSlug={params.docsSlug}
      />
      <div className={css({ marginLeft: "256", paddingBottom: "64" })}>
        <article
          className={css({
            maxWidth: "screen.md",
            mx: "auto",
          })}
        >
          {children}
        </article>
        <DocumentationTOC />
      </div>
    </>
  );
}
