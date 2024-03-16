import { Tokens } from "@pandacss/dev";

const dimensions = {
  0: { value: "0" },
  1: { value: "1px" },
  2: { value: "0.125rem" },
  4: { value: "0.25rem" },
  8: { value: "0.5rem" },
  16: { value: "1rem" },
  24: { value: "1.5rem" },
  32: { value: "2rem" },
  40: { value: "2.5rem" },
  48: { value: "3rem" },
  56: { value: "3.5rem" },
  64: { value: "4rem" },
  72: { value: "4.5rem" },
  80: { value: "5rem" },
  96: { value: "6rem" },
  128: { value: "8rem" },
  160: { value: "10rem" },
  192: { value: "12rem" },
  256: { value: "16rem" },
  320: { value: "20rem" },
  384: { value: "24rem" },
  448: { value: "28rem" },
  512: { value: "32rem" },
  640: { value: "40rem" },
  768: { value: "48rem" },
  896: { value: "56rem" },
  960: { value: "60rem" },
};

export const core: Tokens = {
  colors: {
    white: { value: "#ffffff" },
    black: { value: "#000000" },
    gray: {
      50: { value: "#f8fafc" },
      100: { value: "#f1f5f9" },
      200: { value: "#e2e8f0" },
      300: { value: "#cbd5e1" },
      400: { value: "#94a3b8" },
      500: { value: "#64748b" },
      600: { value: "#475569" },
      700: { value: "#334155" },
      800: { value: "#1e293b" },
      900: { value: "#0f172a" },
    },
  },
  fonts: {
    mono: {
      value: "var(--font-mono)",
    },
    sans: {
      value: "var(--font-sans)",
    },
  },
  radii: {
    none: { value: "0" },
    sm: { value: "4px" },
    md: { value: "8px" },
    lg: { value: "16px" },
    full: { value: "9999px" },
  },
  spacing: {
    nav: {
      height: {
        value: "4rem",
      },
    },
    ...dimensions,
  },
  sizes: {
    nav: {
      height: {
        value: "4rem",
      },
    },
    screen: {
      height: { value: "100vh" },
      width: { value: "100vw" },
    },
    full: { value: "100%" },
    ...dimensions,
  },
};
