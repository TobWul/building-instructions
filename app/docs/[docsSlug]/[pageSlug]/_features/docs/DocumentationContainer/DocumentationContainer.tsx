"use client";
import React, { useContext } from "react";
import { Content } from "@/components";
import { css } from "@/style/generated-styles/css";
import { AIContext } from "../../ai/AIContext";

type Props = {
  children: React.ReactNode;
};

export const DocumentationContainer = ({ children }: Props) => {
  const { AIPanelOpen } = useContext(AIContext);
  return (
    <Content
      className={css({
        marginLeft: "256",
        "& > article > * + *": { marginTop: "[1em]" },
        "& li": {
          listStyleType: "disc",
          marginLeft: "24",
        },
        transform: AIPanelOpen ? "translateX(-256px)" : "none",
        transitionProperty: "transform",
        transitionDuration: "normal",
        transitionTimingFunction: "easeIn",
      })}
    >
      {children}
    </Content>
  );
};
