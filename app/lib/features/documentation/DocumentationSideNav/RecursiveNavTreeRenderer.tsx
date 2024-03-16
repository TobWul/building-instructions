import { DocumentationPageItem } from "@/app/types/DocumentationPageItem";
import { docsPageUrl } from "./lib/docsPageUrl";
import { NavItem } from "./NavItem";
import { css } from "@/styled-system/css";
import { slugify } from "@/app/lib/utils/slugify";

type Props = {
  navTree: DocumentationPageItem[];
  docsSlug: string;
  currentUrl: string;
};

export const RecursiveNavTreeRenderer = ({
  navTree,
  docsSlug,
  currentUrl,
}: Props) => {
  const renderNavTree = (navTree: DocumentationPageItem[]) => {
    return navTree.map((item) => {
      const entries = Object.entries(item);
      return entries.map(([title, value]) => {
        const url = docsPageUrl(docsSlug, slugify(title));
        const active = currentUrl === docsPageUrl(docsSlug, slugify(title));

        if (typeof value === "object") {
          // console.log("Key:", key, "Value: ", value, "Title: ", title);
          const hasChildren = Object.values(value).some(
            (v) => typeof v === "object"
          );

          if (hasChildren) {
            return (
              <NavItem title={title} key={title} active={active}>
                <ul
                  className={css({
                    marginLeft: "16",
                    borderLeft: "primary",
                  })}
                >
                  {renderNavTree(value)}
                </ul>
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
