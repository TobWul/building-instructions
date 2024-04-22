import { visit } from "unist-util-visit";

export const rehypeColorPreview = () => {
  // Use regex to find # followed by 3 or 6 characters and replace with a div with the background color
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "code" && node.properties) {
        const value = node.children[0].value;
        // Check if value is a hex color
        if (!value?.match(/^#([A-Fa-f0-9]{3}){1,2}$/)) {
          return;
        }

        // Insert the <ColorPreview /> component
        node.children.unshift({
          type: "element",
          tagName: "ColorPreview",
          properties: { color: value },
          children: [],
        });
      }
    });
  };
};
