import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { Nav } from "../components/Nav";
import { cx } from "class-variance-authority";
import { Footer } from "../components/Footer/Footer";
import { ThemeProvider } from "./lib/providers/ThemeProvider";
import { css } from "@/styled-system/css";

const mono = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mono",
});
const sans = Manrope({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Documentation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          mono.variable,
          sans.variable,
          css({
            fontFamily: "sans",
            display: "flex",
            flexDirection: "column",
            minHeight: "screen.height",
            backgroundColor: "background",
            color: "text.primary",
          })
        )}
      >
        <ThemeProvider>
          <Nav />
          <main className={css({ flex: "1", marginTop: "nav.height" })}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
