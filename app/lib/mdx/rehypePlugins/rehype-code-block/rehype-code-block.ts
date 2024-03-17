import { visit } from "unist-util-visit";

type Metadata = {
  lang?: string;
  title?: string;
  highlightLines?: string;
};

const parseMetadata = (lang: string, meta: string): Metadata => {
  const metadata = {
    lang: lang.split("-")[1],
  };
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

        if (codeNode) {
          const metadata = parseMetadata(
            codeNode.properties.className[0],
            codeNode.data.meta
          );

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
