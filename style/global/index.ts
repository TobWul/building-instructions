import { ExtendableGlobalStyleObject } from "../generated-styles/types";
import { codeStyles } from "./code";
import { tableStyles } from "./table";
import { globalTextStyles } from "./textStyles";

// @ts-ignore
const styles: ExtendableGlobalStyleObject = {
  ...globalTextStyles,
  ...tableStyles,
  ...codeStyles,
};

export const globalStyles = styles as object;
