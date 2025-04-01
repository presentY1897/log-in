import React from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "checkbox";
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <input {...props} className="size-5 accent-foreground" type="checkbox" />
  );
}
