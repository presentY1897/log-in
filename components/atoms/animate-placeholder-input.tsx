import React from "react";

interface AnimatePlaceholderInputProps {
  type: string;
  placeholder?: string;
  inputValue: string;
  inputValueChange: (value: string) => void;
}

export default function AnimatePlaceholderInput({
  type = "text",
  placeholder,
  inputValue,
  inputValueChange,
}: AnimatePlaceholderInputProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center bg-background rounded-md p-2 ring-2 ring-foreground focus-within:ring-foreground">
        <input
          className="peer rounded-md text-foreground bg-background focus:outline-none"
          type={type}
          value={inputValue}
          onChange={(e) => inputValueChange(e.target.value)}
        />
        {inputValue.length > 0 ? (
          <div className="px-1 absolute justify-items-center align-middle text-center place-content-center pointer-events-none select-none bg-background text-foreground -translate-x-1 -translate-y-full">
            {placeholder}
          </div>
        ) : (
          <div className="px-1 absolute justify-items-center align-middle text-center place-content-center pointer-events-none select-none bg-background text-foreground peer-focus:transition peer-focus:duration-200 peer-focus:-translate-x-1 peer-focus:-translate-y-full">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  );
}
