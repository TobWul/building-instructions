import { css } from "@/style/generated-styles/css";
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
        zIndex: "nav",
      })}
    >
      <p>Home</p>
    </nav>
  );
};
