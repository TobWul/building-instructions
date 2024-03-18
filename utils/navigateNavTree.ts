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
      // @ts-ignore TODO: fix that it's sometimes an array and sometimes an object
      navigateNavTree(value, visitor);
    }
  }
};
