import { css } from "@/style/generated-styles/css";
import React from "react";

type Props = {
  author: "user" | "system";
  text: string;
};

export const AIChatBubble = ({ author, text }: Props) => {
  return (
    <div
      className={css({
        backgroundColor:
          author === "user" ? "layer.2.default" : "layer.3.default",
        borderRadius: "md",
        padding: "16",
        marginBottom: "8",
        display: "flex",
        justifyContent: author === "user" ? "flex-end" : "flex-start",
      })}
    >
      {text}
    </div>
  );
};
