// Look through the whole nav object to find the pageSlug
// If found, return the source

import { slugify } from "@/utils";
import { navigateNavTree } from "@/utils/navigateNavTree";

// If not found, return null
export const findMarkdownFileInNav = (
  nav: any,
  pageSlug: string
): string | undefined => {
  let result = undefined;
  navigateNavTree(nav, (title: string, value: string) => {
    if (slugify(title) === pageSlug) {
      result = value;
    }
  });
  return result;
};
