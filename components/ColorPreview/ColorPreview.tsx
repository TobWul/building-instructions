import { css } from "@/style/generated-styles/css";
import React from "react";

type Props = {
  color: string;
  children: React.ReactNode;
};

export const ColorPreview = ({ color, children }: Props) => {
  return (
    <span>
      <span
        style={{ backgroundColor: color }}
        className={css({
          display: "inline-block",
          height: "16",
          width: "16",
          marginRight: "4",
          position: "relative",
          top: "2",
          borderRadius: "sm",
        })}
      />
      {children}
    </span>
  );
};
