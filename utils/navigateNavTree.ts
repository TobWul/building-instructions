/**
nav:
  - "Introduction": "index.mdx"
  - "Getting Started":
    - "Installation": "installation/index.mdx"
    - "Configuration": "installation/configuration.mdx"
  - "Components":
    - "Overview": "components/index.mdx"
    - "Design tokens": "components/design-tokens.md"
    - "Button": "../../components/Button/README.md"
    - "SectionTitle": "../../components/SectionTitle/README.md"
  - "Reference":
    - "Other tools": "reference/other-tools.mdx"
    - "Remark plugins": "reference/remark-plugins.md"
 */

import { NavTree } from "@/app/types/NavTree";

export const navigateNavTree = (
  navTree: NavTree,
  visitor: (title: string, value: string, level: number) => void
) => {
  for (const title in navTree) {
    const value = navTree[title];
    if (typeof value === "string") {
      visitor(title, value, 0);
    } else {
      navigateNavTree(value, visitor);
    }
  }
};
