"use client";
import React from "react";
import { DocumentationPageItem } from "@/app/types/DocumentationPageItem";
import { css } from "@/styled-system/css";
import { usePathname } from "next/navigation";
import { RecursiveNavTreeRenderer } from "./RecursiveNavTreeRenderer";
import { useScrollNavToCurrentLink } from "./lib/useScrollNavToCurrentLink";

type Props = {
  title: string;
  navTree: DocumentationPageItem[];
  docsSlug: string;
};

export const DocumentationSideNav = ({ title, navTree, docsSlug }: Props) => {
  const currentUrl = usePathname();

  useScrollNavToCurrentLink(currentUrl);

  return (
    <nav
      className={css({
        borderRight: "primary",
        position: "fixed",
        top: "nav.height",
        left: "0",
        width: "256",
        minHeight:
          "[calc(token(sizes.screen.height) - token(sizes.nav.height))]",
        overflowY: "auto",
      })}
    >
      {/* "border-r fixed top-navHeight left-0 w-48 max-h-screen overflow-y-auto"> */}
      <p className="font-bold">{title}</p>
      <RecursiveNavTreeRenderer
        navTree={navTree}
        docsSlug={docsSlug}
        currentUrl={currentUrl}
      />
    </nav>
  );
};
