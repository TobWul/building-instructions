import { AIContext } from "@/app/docs/[docsSlug]/[pageSlug]/_features/ai/AIContext";
import { css } from "@/style/generated-styles/css";
import React, { useContext } from "react";

type Props = {
  top?: number;
  left?: number;
  text?: string;
};

const ActionButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className={css({
        py: "4",
        px: "8",
        backgroundColor: "layer.2.default",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "layer.2.hovered",
        },
        "&+&": {
          borderLeft: "primary",
        },
      })}
    >
      {children}
    </button>
  );
};

export const ActionBar = ({ top, left, text }: Props) => {
  const { ask, toggleAIPanel } = useContext(AIContext);

  const openAIPanel = () => {
    toggleAIPanel();
    text && ask(text);
  };

  return (
    <div
      style={{ top, left }}
      className={css({
        position: "absolute",
        backgroundColor: "layer.2.default",
        border: "primary",
        transform: "translate(-50%, calc(-100% - 4px))",
        borderRadius: "md",
        overflow: "hidden",
      })}
    >
      <ActionButton onClick={openAIPanel}>Explain with AI</ActionButton>
      <ActionButton onClick={() => console.log("Comment")}>
        Comment
      </ActionButton>
    </div>
  );
};
