import { cva, type RecipeVariantProps } from "@/style/generated-styles/css";
import React from "react";

const buttonStyle = cva({
  base: {
    cursor: "pointer",
    borderRadius: "md",
    fontWeight: "normal",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "component.button.primary.default",
        color: "text.primary",
      },
      secondary: {
        backgroundColor: "component.button.secondary.default",
        border: "component.button.secondary",
        _hover: {
          backgroundColor: "component.button.secondary.hover",
        },
      },
    },
    size: {
      default: {
        py: "8",
        px: "16",
      },
      small: {
        textStyle: "body2",
        py: "2",
        px: "4",
      },
      tiny: {
        textStyle: "caption",
        py: "1",
        px: "4",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>; // { size?: 'small' | 'large' }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyle({ variant, size })} {...props}>
      {children}
    </button>
  );
};
