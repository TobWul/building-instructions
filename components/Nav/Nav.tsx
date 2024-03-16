import { css } from "@/styled-system/css";
import React from "react";

type Props = {
  // Add your prop types here
};

export const Nav = ({}: Props) => {
  return (
    <nav
      className={css({
        borderBottom: "primary",
        height: "nav.height",
        position: "fixed",
        top: "0",
        left: "0",
        width: "full",
        backgroundColor: "layer.1.default",
        textStyle: "body1",
      })}
    >
      <p>Home</p>
    </nav>
  );
};
