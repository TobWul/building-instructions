const fs = require("fs");
const path = require("path");
import { NavItem } from "@/app/types/NavItem";
import YAML from "yaml";

export const fetchDocumentationStructure = async (
  docsSlug: string
): Promise<{ nav: NavItem[]; title: string } | "404"> => {
  const navPath = path.join(`docs/${docsSlug}/nav.yml`);
  try {
    const navContent = fs.readFileSync(navPath, "utf8");
    const nav = YAML.parse(navContent);

    return nav;
  } catch (error) {
    console.error("Error reading nav.yml", error);
    return "404";
  }
};
