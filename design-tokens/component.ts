import { SemanticTokens } from "@pandacss/dev";

export const component: SemanticTokens = {
  colors: {
    button: {
      primary: {
        default: { value: "{colors.gray.500}" },
        hover: { value: "{colors.gray.600}" },
      },
      secondary: {
        default: { value: "{colors.layer.1.default}" },
        hover: { value: "{colors.layer.1.hovered}" },
      },
    },
  },
  borders: {
    button: {
      secondary: {
        DEFAULT: {
          value: {
            base: "{borders.primary}",
          },
        },
        hover: {
          value: {
            base: "{borders.primary.hovered}",
          },
        },
      },
    },
  },
};
