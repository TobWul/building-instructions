import { css } from "@/style/generated-styles/css";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  title: string;
  content: React.ReactNode;
};

export const CardLink = ({ title, href, content }: Props) => {
  return (
    <Link href={href}>
      <h3 className={css({ textStyle: "subtitle1" })}>{title}</h3>
      <p className={css({ textStyle: "body2", color: "text.secondary" })}>
        {content}
      </p>
    </Link>
  );
};
