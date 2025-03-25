import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({ checked = false, onChange }: CheckboxProps) {
  return (
    <input
      className="size-5 accent-primary hover:accent-secondary"
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}
