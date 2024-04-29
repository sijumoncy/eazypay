import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@repo/utils/cn";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-xs leading-6",
      label: "text-sm",
      cardHead: "text-xl font-medium uppercase",
      bold: "text-base font-semibold",
      link: "underline-offset-4 hover:underline",
    },
    colors: {
      muted: "text-muted-foreground",
      default: "text-[var(--theme-dark)]",
      success: "text-[var(--success)]",
      danger: "text-[var(--danger)]",
      warning: "text-[var(--warning)]",
      linkColor: "text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
    colors: "default",
  },
});

export interface TextsProps
  extends React.HTMLProps<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Texts = React.forwardRef<HTMLParagraphElement, TextsProps>(
  ({ className, variant, colors, asChild = false, ...props }) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn(textVariants({ variant, colors, className }))}
        {...props}
      />
    );
  }
);

Texts.displayName = "Texts";

export { Texts, textVariants };
