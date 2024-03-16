import { SemanticTokens } from "@pandacss/dev";
import { component } from "./component";

export const semantic: SemanticTokens = {
  colors: {
    text: {
      primary: {
        value: { base: "{colors.gray.900}", _dark: "{colors.gray.100}" },
      },
      secondary: {
        value: { base: "{colors.gray.700}", _dark: "{colors.gray.300}" },
      },
    },
    layer: {
      1: {
        default: {
          value: { base: "{colors.white}", _dark: "{colors.gray.800}" },
        },
        hovered: {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.700}" },
        },
      },
      2: {
        default: {
          value: { base: "{colors.gray.100}", _dark: "{colors.gray.700}" },
        },
        hovered: {
          value: { base: "{colors.gray.200}", _dark: "{colors.gray.600}" },
        },
      },
    },
    background: {
      DEFAULT: {
        value: { base: "{colors.white}", _dark: "{colors.gray.900}" },
      },
      darker: {
        value: { base: "{colors.gray.800}", _dark: "{colors.gray.100}" },
      },
    },
    component: { ...component.colors },
  },
  borders: {
    primary: {
      DEFAULT: {
        value: {
          base: "1px solid {colors.gray.200}",
          _dark: "1px solid {colors.gray.700}",
        },
      },
      hovered: {
        value: {
          base: "1px solid {colors.gray.300}",
          _dark: "1px solid {colors.gray.600}",
        },
      },
    },
    secondary: {
      DEFAULT: {
        value: {
          base: "1px solid {colors.gray.100}",
          _dark: "1px solid {colors.gray.700}",
        },
      },
      hovered: {
        value: {
          base: "1px solid {colors.gray.200}",
          _dark: "1px solid {colors.gray.600}",
        },
      },
    },
    component: { ...component.borders },
  },
};
