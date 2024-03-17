import { defineConfig } from "@pandacss/dev";
import { core } from "./style/design-tokens/core";
import { semantic } from "./style/design-tokens/semantic";
import { textStyles } from "./style/global/textStyles";
import { globalStyles } from "./style/global";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  strictTokens: true,

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: core,
    semanticTokens: semantic,
    textStyles,
  },

  globalCss: {
    ...globalStyles,
  },

  // The output directory for your css system
  outdir: "style/generated-styles",
});
