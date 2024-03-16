import {
  DocumentationSideNav,
  DocumentationTOC,
} from "@/app/lib/features/documentation";
import React from "react";
import { fetchDocumentationStructure } from "../lib/fetchDocumentationStructure";
import { css } from "@/styled-system/css";
import { notFound } from "next/navigation";
import { Page } from "@/components";

type Props = {
  // Add your prop types here
  children: React.ReactNode;
  params: { docsSlug: string };
};

export default async function Layout({ params, children }: Props) {
  const result = await fetchDocumentationStructure(params.docsSlug);

  if (result === "404") {
    return notFound();
  }

  const { title, nav } = result;

  return (
    <>
      <DocumentationSideNav
        title={title}
        navTree={nav}
        docsSlug={params.docsSlug}
      />
      <div className={css({ marginLeft: "256" })}>
        <article
          className={css({ "& > * + *": { marginTop: "[1em]" } })}
          // className="[&_*>*]:mt-[1em] w-full max-w-screen-md mx-auto"
        >
          {children}
        </article>
        <DocumentationTOC />
      </div>
    </>
  );
}
