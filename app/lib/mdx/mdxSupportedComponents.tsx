import { Button, CodeBlock, ColorPreview } from "@/components";

export const mdxSupportedComponents = {
  Button,
  ColorPreview,
  CodeBlock,
  br: (props: any) => <br {...props} />,
};
