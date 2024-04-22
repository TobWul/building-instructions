import { useEffect } from "react";

export const useScrollNavToCurrentLink = (currentUrl: string) => {
  useEffect(() => {
    // Scroll to the active link
    const activeLink = document.querySelector(
      `a[href='${currentUrl}']`
    ) as HTMLAnchorElement;

    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentUrl]);
};
