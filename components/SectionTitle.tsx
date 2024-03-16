"use client";
import React, { useMemo } from "react";
import { slugify } from "../app/lib/utils/slugify";
import { Button } from ".";
import { css } from "@/styled-system/css";

type Props = {
  // Add your prop types here
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

// A component that displays a title, h1, h2 etc.
// Hovering the title there should be a # anchor link that appears when clicked copies the url to the clipboard
export const SectionTitle = ({ tag, children }: Props) => {
  const slug = useMemo(() => {
    if (typeof children === "string") {
      return children.toLowerCase().replace(/ /g, "-");
    }
  }, [children]);

  const id = typeof children === "string" ? slugify(children) : "";

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(id);
  };

  // <h1> or <h2> etc.
  const TitleTag = tag;

  return (
    <TitleTag
      id={id}
      className={css({
        "& button": {
          opacity: "[0]",
          transform: "translateX(5px)",
          transition: "all 200ms ease-in-out",
        },
        "&:hover > button": {
          opacity: ["1"],
          transform: "translateX(0)",
        },
      })}
    >
      {children}
      <Button onClick={copyToClipboard} variant="secondary" size="small">
        Copy link to section
      </Button>
    </TitleTag>
  );
};
