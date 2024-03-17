import { ExtendableGlobalStyleObject } from "../generated-styles/types";

export const tableStyles: ExtendableGlobalStyleObject = {
  table: {
    width: "full",
    border: "primary",
    borderRadius: "md",
    borderStyle: "hidden",
    boxShadow: "[0 0 0 1px token(colors.border.primary)]",
  },
  thead: {
    backgroundColor: "layer.2.default",
    color: "text.primary",
    borderBottom: "primary",
  },
  "tr+tr": {
    borderTop: "primary",
  },
  "th, td": {
    paddingY: "4",
    paddingX: "8",
  },
  "th+th, td+td": {
    borderLeft: "primary",
  },
};
