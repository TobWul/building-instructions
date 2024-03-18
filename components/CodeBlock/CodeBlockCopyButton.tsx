"use client";
import React, { forwardRef } from "react";
import { css } from "@/style/generated-styles/css";

export const CodeBlockCopyButton = forwardRef(
  ({}, ref: React.Ref<HTMLDivElement>) => {
    const copyToClipboard = () => {
      console.log(ref);

      // @ts-ignore
      const text = ref?.current?.textContent;
      console.log("copying to clipboard", text);

      navigator.clipboard.writeText(text);
    };
    return (
      <button
        onClick={copyToClipboard}
        className={css({
          position: "absolute",
          top: "8",
          right: "8",
          padding: "4",
          borderRadius: "md",
          backgroundColor: "layer.1.default",
          border: "primary",
          color: "text.primary",
          cursor: "pointer",
          zIndex: "[2]",
          "&:hover": {
            backgroundColor: "layer.1.hovered",
            border: "primary.hovered",
          },
        })}
      >
        Copy
      </button>
    );
  }
);

CodeBlockCopyButton.displayName = "CodeBlockCopyButton";
