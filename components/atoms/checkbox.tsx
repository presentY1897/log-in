import React from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox(props: CheckboxProps) {
  const { type = "checkbox", ...attributes } = props;
  return (
    <input {...attributes} className="size-5 accent-foreground" type={type} />
  );
}
