import { slugify } from "@/app/lib/utils/slugify";
import { css, cva } from "@/styled-system/css";
import Link from "next/link";
import { docsPageUrl } from "./lib/docsPageUrl";

const navItemStyles = cva({
  base: {
    display: "block",
    py: "4",
    px: "8",
    mx: "4",
    color: "text.secondary",
    rounded: "md",
  },
  variants: {
    active: {
      true: {
        backgroundColor: "layer.1.hovered",
        color: "text.primary",
      },
    },
    clickable: {
      true: {
        _hover: {
          background: "layer.1.hovered",
          color: "text.primary",
        },
      },
    },
    hasChildren: {
      true: {},
    },
  },
});

export const NavItem = ({
  title,
  children,
  active,
  url,
}: {
  title: string;
  children?: React.ReactNode;
  active?: boolean;
  url?: string;
}) => {
  return (
    <li>
      {url ? (
        <Link
          className={navItemStyles({
            clickable: true,
            active,
          })}
          href={url}
        >
          {title}
        </Link>
      ) : (
        <p className={navItemStyles({ hasChildren: true })}>{title}</p>
      )}
      {children}
    </li>
  );
};
