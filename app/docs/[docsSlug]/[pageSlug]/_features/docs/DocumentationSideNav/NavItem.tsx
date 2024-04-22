import { cva } from "@/style/generated-styles/css";
import Link from "next/link";

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
        backgroundColor: "layer.2.hovered",
        color: "text.primary",
      },
    },
    clickable: {
      true: {
        _hover: {
          background: "layer.2.hovered",
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
