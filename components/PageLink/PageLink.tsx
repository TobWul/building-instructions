import { cva } from "@/style/generated-styles/css";
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
    _hover: {
      textDecoration: "underline",
    },
  },
});

export const PageLink = ({ href, external, children }: Props) => {
  return (
    <Link href={href} className={linkStyles()}>
      {children}
    </Link>
  );
};
