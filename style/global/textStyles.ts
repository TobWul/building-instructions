import { defineConfig, defineTextStyles } from "@pandacss/dev";
import { ExtendableGlobalStyleObject } from "../generated-styles/types";

const typographyScale = 1.067;

const calculateFontSize = (i: number) => {
  // Round to 4 decimal places
  // return `${Math.pow(typographyScale, i)}rem`;
  return `${Math.pow(typographyScale, i).toFixed(4)}rem`;
};

export const textStyles = defineTextStyles({
  heading1: {
    value: {
      fontSize: calculateFontSize(6),
      fontWeight: "bold",
      lineHeight: "1.2em",
    },
  },
  heading2: {
    value: {
      fontSize: calculateFontSize(5),
      fontWeight: "bold",
      lineHeight: "1.4em",
    },
  },
  heading3: {
    value: {
      fontSize: calculateFontSize(4),
      fontWeight: "bold",
      lineHeight: "1.4em",
    },
  },
  heading4: {
    value: {
      fontSize: calculateFontSize(3),
      fontWeight: "bold",
      lineHeight: "1.4em",
    },
  },
  subtitle1: {
    value: {
      fontSize: calculateFontSize(2),
      fontWeight: "bold",
      lineHeight: "1.6em",
    },
  },
  subtitle2: {
    value: {
      fontSize: calculateFontSize(1),
      fontWeight: "bold",
      lineHeight: "1.6em",
    },
  },
  body1: {
    value: {
      fontSize: calculateFontSize(0),
      lineHeight: "1.6em",
    },
  },
  body2: {
    value: {
      fontSize: calculateFontSize(-1),
      lineHeight: "1.6em",
    },
  },
  caption: {
    value: {
      fontSize: calculateFontSize(-2),
      lineHeight: "1.6em",
    },
  },
  overline: {
    value: {
      fontSize: calculateFontSize(-3),
      lineHeight: "1.6em",
    },
  },
});

export const globalTextStyles = {
  h1: {
    textStyle: "heading1",
  },
  h2: {
    textStyle: "heading2",
  },
  h3: {
    textStyle: "heading3",
  },
  h4: {
    textStyle: "heading4",
  },
  h5: {
    textStyle: "subtitle1",
  },
  h6: {
    textStyle: "subtitle2",
  },
  p: {
    textStyle: "body1",
  },
  blockquote: {
    textStyle: "body2",
    borderLeft: "primary",
    borderLeftWidth: "4",
    borderColor: "text.primary",
    paddingLeft: "16",
  },
};
