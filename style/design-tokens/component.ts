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
    code: {
      background: {
        value: "{colors.layer.2.default}",
      },
      highlight: {
        value: { base: "{colors.blue.100}", _dark: "{colors.blue.900}" },
      },
      string: {
        value: { base: "{colors.green.700}", _dark: "{colors.green.400}" },
      },
      number: {
        value: { base: "{colors.blue.700}", _dark: "{colors.blue.400}" },
      },
      keyword: {
        value: { base: "{colors.red.700}", _dark: "{colors.red.400}" },
      },
      comment: {
        value: { base: "{colors.gray.500}", _dark: "{colors.gray.400}" },
      },
      default: {
        value: { base: "{colors.text.primary}" },
      },
      builtin: {
        value: { base: "{colors.red.700}", _dark: "{colors.red.400}" },
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
