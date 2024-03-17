import React from "react";
import { css } from "@/style/generated-styles/css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Content = ({ children, className = "" }: Props) => {
  const contentStyle = css({
    padding: "24",
  });
  return <div className={[contentStyle, className].join(" ")}>{children}</div>;
};
