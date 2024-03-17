import "@/style/global/globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer/Footer";
import { ThemeProvider } from "./lib/providers/ThemeProvider";
import { css } from "@/style/generated-styles/css";
import Head from "next/head";

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
    <>
      <html lang="en" className={[mono.variable, sans.variable].join(" ")}>
        <body
          className={css({
            fontFamily: "sans",
            display: "flex",
            flexDirection: "column",
            minHeight: "screen.height",
            backgroundColor: "background",
            color: "text.primary",
          })}
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
    </>
  );
}
