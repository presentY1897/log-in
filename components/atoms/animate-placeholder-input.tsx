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
      <div className="flex items-center bg-background rounded-md p-2 ring-2 ring-secondary focus-within:ring-secondary">
        <input
          className="peer rounded-md bg-background text-primary focus:outline-none"
          type={type}
          value={inputValue}
          onChange={(e) => inputValueChange(e.target.value)}
        />
        {inputValue.length > 0 ? (
          <div className="p-1 absolute justify-items-center align-middle text-center place-content-center pointer-events-none select-none bg-background text-primary -translate-x-1 -translate-y-3/4">
            {placeholder}
          </div>
        ) : (
          <div className="p-1 absolute justify-items-center align-middle text-center place-content-center pointer-events-none select-none bg-background text-primary peer-focus:transition peer-focus:duration-200 peer-focus:-translate-x-1 peer-focus:-translate-y-3/4">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  );
}
