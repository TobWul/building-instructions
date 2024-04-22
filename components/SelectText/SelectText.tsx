"use client";
import React from "react";
import { ActionBar } from "./ActionBar";
import { useSelectText } from "./useSelectText";

/**
 * This component renders a list of actions above the text that is highlighted.
 * The text highlighted is passed to the different actions
 * @returns
 */
export const SelectText = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { position, text, open } = useSelectText();

  console.log("open", open);

  return (
    <div ref={ref}>
      {open && (
        <ActionBar top={position?.top} left={position?.left} text={text} />
      )}
    </div>
  );
};
