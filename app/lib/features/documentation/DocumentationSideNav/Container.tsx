import { css } from "@/style/generated-styles/css";
import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav
      className={css({
        borderRight: "default",
        borderColor: "default",
        position: "fixed",
        top: "navHeight",
        left: "0",
        width: "[200px]",
        maxHeight: "screen-h",
        overflowY: "auto",
      })}
    >
      {children}
    </nav>
  );
};
