import React from "react";
import { cn } from "@/utils/tailwind";

interface AnimatePlaceholderInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The type of input field */
  type?: React.HTMLInputTypeAttribute;
  /** The placeholder text that animates */
  placeholder?: string;
  /** Optional className for the container */
  className?: string;
}

export const AnimatePlaceholderInput = React.forwardRef<
  HTMLInputElement,
  AnimatePlaceholderInputProps
>(({ className, type = "text", placeholder, ...props }, ref) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="relative flex items-center bg-background rounded-md p-2 ring-2 ring-foreground focus-within:ring-foreground">
        <input
          ref={ref}
          {...props}
          type={type}
          placeholder=""
          aria-label={placeholder}
          className="peer w-full rounded-md text-foreground bg-background focus:outline-none"
        />
        <label
          className={cn(
            "absolute px-1 text-center pointer-events-none select-none bg-background text-foreground",
            "transform -translate-x-1 -translate-y-full",
            "peer-placeholder-shown:translate-x-0 peer-placeholder-shown:translate-y-0",
            "peer-focus:transition peer-focus:duration-200 peer-focus:-translate-x-1 peer-focus:-translate-y-full"
          )}
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
});

AnimatePlaceholderInput.displayName = "AnimatePlaceholderInput";

export default AnimatePlaceholderInput;
