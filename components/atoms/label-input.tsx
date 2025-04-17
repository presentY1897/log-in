interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export default function LabelInput({
  labelText,
  type = "text",
  ...props
}: LabelInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-foreground">{labelText}</label>
      <input
        {...props}
        className="bg-background placeholder-secondary rounded-md"
        type={type}
      />
    </div>
  );
}
