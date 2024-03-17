import { docsPageUrl } from "./lib/docsPageUrl";
import { NavItem } from "./NavItem";
import { css } from "@/style/generated-styles/css";
import { slugify } from "@/utils";
import { NavTree } from "@/app/types/NavTree";

type Props = {
  navTree: NavTree;
  docsSlug: string;
  currentUrl: string;
};

const LevelWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul
      className={css({
        marginLeft: "16",
        borderLeft: "primary",
      })}
    >
      {children}
    </ul>
  );
};

export const RecursiveNavTreeRenderer = ({
  navTree,
  docsSlug,
  currentUrl,
}: Props) => {
  const renderNavTree = (navTree: NavTree) => {
    return navTree.map((item) => {
      const entries = Object.entries(item);
      return entries.map(([title, value]) => {
        const url = docsPageUrl(docsSlug, slugify(title));
        const active = currentUrl === docsPageUrl(docsSlug, slugify(title));
        if (typeof value === "object") {
          const hasChildren = Object.values(value).some(
            (v) => typeof v === "object"
          );
          if (hasChildren) {
            return (
              <NavItem title={title} key={title} active={active}>
                <LevelWrapper>{renderNavTree(value)}</LevelWrapper>
              </NavItem>
            );
          } else {
            const title = Object.keys(value)[0];
            return (
              <NavItem title={title} key={title} url={url} active={active} />
            );
          }
        } else {
          return (
            <NavItem title={title} key={title} url={url} active={active} />
          );
        }
      });
    });
  };
  return <ul>{renderNavTree(navTree)}</ul>;
};
