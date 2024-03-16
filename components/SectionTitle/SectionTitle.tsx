"use client";
import React, { useMemo } from "react";
import { slugify } from "../../app/lib/utils/slugify";

type Props = {
  // Add your prop types here
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

// A component that displays a title, h1, h2 etc.
// Hovering the title there should be a # anchor link that appears when clicked copies the url to the clipboard
export const SectionTitle = ({ tag, children }: Props) => {
  const slug = useMemo(
    () => (typeof children === "string" ? slugify(children) : ""),
    [children]
  );

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(slug);
  };

  // <h1> or <h2> etc.
  const TitleTag = tag;

  return (
    <TitleTag id={slug}>
      {children}
      <button onClick={copyToClipboard}>#</button>
    </TitleTag>
  );
};
