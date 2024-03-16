import { cva } from "@/styled-system/css";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  external: boolean;
  children: React.ReactNode;
};

const linkStyles = cva({
  base: {
    color: "blue.500",
  },
});

export const PageLink = ({ href, external, children }: Props) => {
  return (
    <Link href={href} className={linkStyles()}>
      {children}
    </Link>
  );
};
