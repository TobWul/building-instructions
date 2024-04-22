"use client";
import React, { useState } from "react";
import { AIMessageType } from "./AIMessageType";

const AIContext = React.createContext<{
  ask: (question: string) => string;
  messages: AIMessageType[];
  AIPanelOpen: boolean;
  toggleAIPanel: () => void;
}>({
  ask: () => "I don't know",
  AIPanelOpen: false,
  messages: [],
  toggleAIPanel: () => {},
});

const AIContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [AIPanelOpen, setAIPanelOpen] = useState(false);
  const [messages, setMessages] = useState<AIMessageType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleAIPanel = () => {
    setAIPanelOpen(!AIPanelOpen);
  };

  const ask = (question: string) => {
    const message: AIMessageType = { author: "user", text: question };
    setMessages((prev) => [...prev, message]);
    return "I don't know";
  };

  const fetch = async () => {};

  return (
    <AIContext.Provider value={{ ask, messages, toggleAIPanel, AIPanelOpen }}>
      {children}
    </AIContext.Provider>
  );
};

export { AIContext, AIContextProvider };
