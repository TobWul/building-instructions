"use client";
import { css } from "@/style/generated-styles/css";
import React, { useContext } from "react";
import { AIContext } from "./AIContext";
import { AIChatBubble } from "./AIChatBubble";

type Props = {
  // Add your prop types here
};

export const AIPanel = ({}: Props) => {
  const { messages, AIPanelOpen, toggleAIPanel } = useContext(AIContext);

  return (
    <div
      className={css({
        backgroundColor: "layer.1.default",
        borderLeft: "primary",
        padding: "24",
        position: "fixed",
        top: "nav.height",
        width: "256",
        height: "[ calc({sizes.screen.height} - {sizes.nav.height}) ]",
        overflowY: "auto",
        right: "0",
        display: AIPanelOpen ? "block" : "none",
        transform: AIPanelOpen ? "translateX(0)" : "translateX(256px)",
        transitionProperty: "transform",
        transitionDuration: "normal",
        transitionTimingFunction: "easeIn",
      })}
    >
      <button onClick={toggleAIPanel}>x</button>
      {messages.map((message, i) => (
        <AIChatBubble
          author={message.author}
          text={message.text}
          key={`message-${i}`}
        />
      ))}
    </div>
  );
};
