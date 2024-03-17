import { css } from "@/style/generated-styles/css";
import React from "react";

type Props = {
  highlightLines?: string;
};

const lineHeight = 1.5;

export const CodeBlockHighlight = ({ highlightLines }: Props) => {
  if (!highlightLines) {
    return null;
  }

  const multipleLines = highlightLines.includes("-");

  let startLine = 0;
  let distance = 1;

  if (multipleLines) {
    startLine = Number(highlightLines.split("-")[0]);
    const endLine = Number(highlightLines.split("-")[1]);
    distance = endLine + 1 - startLine;
  } else {
    startLine = Number(highlightLines);
  }

  const height = Math.max(lineHeight, lineHeight * distance);

  return (
    <div
      style={{
        top: `${lineHeight * (startLine - 1)}rem`,
        height: `${height}rem`,
      }}
      className={css({
        position: "absolute",
        marginTop: "24",
        left: "0",
        backgroundColor: "component.code.highlight",
        width: "full",
        height: `[${lineHeight}rem]`,
      })}
    ></div>
  );
};
