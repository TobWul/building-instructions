import { css } from "@/style/generated-styles/css";
import React from "react";

type Props = {
  title?: string;
};

export const CodeBlockTitle = ({ title }: Props) => {
  if (!title) {
    return null;
  }
  return (
    <div
      className={css({
        backgroundColor: "layer.3.default",
        fontFamily: "mono",
        paddingY: "8",
        paddingX: "24",
      })}
    >
      {title}
    </div>
  );
};
