import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Checkbox({ checked = false, onChange }: CheckboxProps) {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}
