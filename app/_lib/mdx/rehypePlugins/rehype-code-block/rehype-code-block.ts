import { visit } from "unist-util-visit";

type Metadata = {
  lang?: string;
  title?: string;
  highlightLines?: string;
};

const parseMetadata = (lang: string, meta: string): Metadata => {
  const metadata = {
    lang,
  };
  if (!meta) return metadata;
  meta.split(" ").map((item: string) => {
    const key = item.split("=")[0];
    const value = item.split("=")[1].replaceAll('"', "");
    Object.assign(metadata, { [key]: value });
  });

  return metadata;
};

export const rehypeCodeBlock = (options: any) => {
  return (tree: any) => {
    visit(tree, "element", (node: any, index: any, parent: any) => {
      if (node.tagName === "pre" && parent) {
        const codeNode = node.children.find(
          (child: any) => child.tagName === "code"
        );

        const lang =
          codeNode.properties?.className &&
          codeNode.properties.className.length > 0
            ? codeNode.properties.className[0].split("-")[1]
            : undefined;

        if (lang === "math") return;

        if (codeNode) {
          const metadata = parseMetadata(lang, codeNode.data?.meta);

          const newNode = {
            type: "element",
            tagName: "CodeBlock",
            properties: {
              ...metadata,
            },
            children: [node],
          };

          parent.children[index] = newNode;
        }
      }
    });
  };
};
