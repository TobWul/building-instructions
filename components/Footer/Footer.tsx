import React from "react";
import { ThemeToggle } from "../ThemeToggle";
import { css } from "@/styled-system/css";

type Props = {
  // Add your prop types here
};

export const Footer = ({}: Props) => {
  return (
    <footer className={css({ zIndex: "9999" })}>
      <ThemeToggle />
    </footer>
  );
};
