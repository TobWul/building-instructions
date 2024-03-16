// Look through the whole nav object to find the pageSlug
// If found, return the source

import { slugify } from "@/app/lib/utils/slugify";

// If not found, return null
export const findPage = (nav: any, pageSlug: string): string | undefined => {
  for (const key in nav) {
    if (typeof nav[key] === "object") {
      const result = findPage(nav[key], pageSlug);
      if (result) {
        return result;
      }
    } else {
      if (slugify(key) === pageSlug) {
        return nav[key];
      }
    }
  }
};
