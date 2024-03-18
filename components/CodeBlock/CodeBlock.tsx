"use client";
import { css } from "@/style/generated-styles/css";
import React, { useRef } from "react";
import { CodeBlockTitle } from "./CodeBlockTitle";
import { CodeBlockHighlight } from "./CodeBlockHighlight";
import { CodeBlockCopyButton } from "./CodeBlockCopyButton";

type Props = {
  children: React.ReactNode;
  title?: string;
  lang?: string;
  highlightLines?: string;
};

export const CodeBlock = ({ children, title, lang, highlightLines }: Props) => {
  const ref = useRef(null);

  return (
    <div
      className={[
        "code-block",
        css({
          position: "relative",
          backgroundColor: "layer.2.default",
          borderRadius: "md",
          overflow: "hidden",
        }),
      ].join(" ")}
    >
      <CodeBlockTitle title={title} />
      <div
        ref={ref}
        className={css({
          position: "relative",
          padding: "24",
          "& pre": {
            position: "relative",
            zIndex: "[1]",
          },
          "& code": {
            // background: "[none]",
            // padding: "0",
            // borderRadius: "none",
          },
        })}
      >
        <CodeBlockCopyButton ref={ref} />
        {children}
        <CodeBlockHighlight highlightLines={highlightLines} />
      </div>
    </div>
  );
};
