import React from "react";
import Checkbox from "../atoms/checkbox";

interface CheckboxLabelProps {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function CheckboxLabel({
  label,
  checked = false,
  onChange,
}: CheckboxLabelProps) {
  return (
    <div className="flex items-center">
      <Checkbox checked={checked} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
}
