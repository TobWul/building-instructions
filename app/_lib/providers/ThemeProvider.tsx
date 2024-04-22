"use client";
import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

type Props = {
  // Add your prop types here
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};
