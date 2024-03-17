"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

type Props = {
  // Add your prop types here
};

export const ThemeToggle = ({}: Props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("")}>System</button>
    </div>
  );
};
