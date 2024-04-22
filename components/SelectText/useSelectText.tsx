import { useEffect, useState } from "react";

export const useSelectText = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{ top?: number; left?: number }>();
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const onMouseUp = () => {
      let selection = document.getSelection();
      const text = selection ? selection.toString() : "";

      if (!selection || text === "" || text.length === 0) {
        setOpen(false);
        return;
      }
      let rect = selection.getRangeAt(0).getBoundingClientRect();

      const top = rect.top + window.scrollY;

      setPosition(() => ({
        top,
        left: rect.left + rect.width / 2,
      }));

      setOpen(() => true);
      setText(() => text);
    };

    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return { position, text, open };
};
