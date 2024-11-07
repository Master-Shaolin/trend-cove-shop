"use client";

import { cn } from "@/libs/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";


const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer rounded-md text-base md:text-sm font-semibold leading-4 border-0 border-transparent transition ease-in-out duration-300 font-body text-center hover:text-white hover:bg-gray-600 hover:shadow-cart",
  {
    variants: {
      variant: {
        default:
          "bg-dark placeholder-white focus-visible:outline-none focus:outline-none text-white py-2 transform-none normal-case",
        secondary:
          "border border-solid border-text-dark bg-zinc-50 text-dark hover:border-gray-700 hover:bg-gray-700 hover:text-white disabled:border-none disabled:bg-background-light disabled:text-text-gray disabled:opacity-100",
        text: 
          "text-text-primary inline-flex items-start gap-0 rounded-sm bg-inherit p-0 text-center text-sm hover:bg-transparent hover:text-dark",
      },
      size: {
        xs: "rounded-full p-0.5",
        default: "px-5 py-2",
        sm: "rounded px-3 py-1",
        lg: "rounded px-8",
        icon: "w-6",
        text: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

