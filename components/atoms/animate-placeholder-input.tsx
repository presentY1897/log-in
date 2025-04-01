import React from "react";

interface AnimatePlaceholderInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  inputValueChange: (value: string) => void;
}

export default function AnimatePlaceholderInput(
  props: AnimatePlaceholderInputProps
) {
  const { type = "text", placeholder, inputValueChange, ...attributes } = props;
  return (
    <div className="flex flex-col">
      <div className="flex items-center bg-background rounded-md p-2 ring-2 ring-foreground focus-within:ring-foreground">
        <input
          {...attributes}
          className="peer rounded-md text-foreground bg-background focus:outline-none"
          type={type}
          placeholder=""
          onChange={(e) => inputValueChange(e.target.value)}
        />
        <div
          className="px-1 absolute justify-items-center align-middle text-center place-content-center pointer-events-none select-none bg-background text-foreground 
					-translate-x-1 -translate-y-full
					peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:-translate-y-0 
					peer-focus:transition peer-focus:duration-200 peer-focus:-translate-x-1 peer-focus:-translate-y-full"
        >
          {placeholder}
        </div>
      </div>
    </div>
  );
}
