import React from "react";
import { ThemeToggle } from "../ThemeToggle";
import { css } from "@/style/generated-styles/css";

type Props = {
  // Add your prop types here
};

export const Footer = ({}: Props) => {
  return (
    <footer>
      <ThemeToggle />
    </footer>
  );
};
