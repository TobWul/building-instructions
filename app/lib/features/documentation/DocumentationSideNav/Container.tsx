import { css } from "@/style/generated-styles/css";
import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav
      className={css({
        borderRight: "primary",
        position: "fixed",
        top: "nav.height",
        left: "0",
        width: "[200px]",
        maxHeight: "screen.height",
        overflowY: "auto",
      })}
    >
      {children}
    </nav>
  );
};
