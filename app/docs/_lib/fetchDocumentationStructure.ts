const fs = require("fs");
const path = require("path");
import { Response, NavTree } from "@/app/_types";
import YAML from "yaml";

export const fetchDocumentationStructure = async (
  docsSlug: string
): Promise<Response<{ navTree: NavTree; title: string }>> => {
  const navPath = path.join(
    `${process.env.NEXT_PUBLIC_DOCS_FOLDER}/${docsSlug}/nav.yml`
  );

  try {
    const navYAML = fs.readFileSync(navPath, "utf8");
    const navJSON = YAML.parse(navYAML);

    return {
      status: 200,
      data: {
        title: navJSON.title,
        navTree: navJSON.nav,
      },
    };
  } catch (error) {
    console.error("Error reading nav.yml", error);
    return { status: 404, data: null };
  }
};
