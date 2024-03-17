import { css } from "@/style/generated-styles/css";
import React from "react";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const Page = ({ children }: Props) => {
  return <div className={css({})}>{children}</div>;
};
