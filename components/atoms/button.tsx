import { cn } from "@/utils/tailwind";
import React from "react";

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  width?: string;
  height?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, width, height, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        style={{ width, height }}
        {...props}
        className={cn(
          "bg-foreground text-background rounded-lg border-2 border-foreground px-2 py-1 hover:bg-background hover:text-foreground hover:border-foreground",
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
