import React from "react";
import Checkbox from "../atoms/checkbox";

export interface CheckboxLabelProps {
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
    <label className="flex items-center gap-2">
      <Checkbox checked={checked} onChange={onChange} />
      <div className="select-none">{label}</div>
    </label>
  );
}
