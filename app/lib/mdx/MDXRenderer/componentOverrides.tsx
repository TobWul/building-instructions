import React from "react";
import { SectionTitle } from "../../../../components/SectionTitle";

export const componentOverrides = {
  h1: (props: any) => <SectionTitle tag="h1" {...props} />,
  h2: (props: any) => <SectionTitle tag="h2" {...props} />,
  sup: (props: any) => <sup {...props} />,
};
