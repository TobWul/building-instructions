import { defineConfig } from "@pandacss/dev";
import { core } from "./design-tokens/core";
import { semantic } from "./design-tokens/semantic";
import { globalTextStyles, textStyles } from "./design-tokens/textStyles";

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
    ...globalTextStyles,
  },

  // The output directory for your css system
  outdir: "styled-system",
});
