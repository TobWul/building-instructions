import { slugify } from "@/app/lib/utils/slugify";
import { fetchDocumentationStructure } from "./fetchDocumentationStructure";

const fs = require("fs");
const path = require("path");

export const fetchDocumentationPage = async (
  docsSlug: string,
  pageSlug: string
) => {
  const result = await fetchDocumentationStructure(docsSlug);

  if (result === "404") {
    return "404";
  }

  const nav = result.nav;

  // Look through the whole nav object to find the pageSlug
  // If found, return the source
  // If not found, return null
  const findPage = (nav: any, pageSlug: string): string | undefined => {
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

  const foundPage = findPage(nav, pageSlug);

  const mdxPath = path.join(`docs/${docsSlug}/${foundPage}`);

  const source = fs.readFileSync(mdxPath, "utf8");

  // Return Promise with source
  return source;
};
