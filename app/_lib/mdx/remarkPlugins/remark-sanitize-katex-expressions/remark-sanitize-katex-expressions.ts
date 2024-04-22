import { visit } from "unist-util-visit";

export const remarkSanitizeKatexExpressions = () => {
  return (tree: any) => {
    visit(tree, "inlineMath", (node: any) => {
      console.log("inlineMath", node.value);

      // Wrap inline math with ```math and ``` and remove $$ from the start and end
      node.value =
        "```math\n" +
        node.value.replace(/^\$\$/, "").replace(/\$\$$/, "") +
        "\n```";
    });
  };
};
