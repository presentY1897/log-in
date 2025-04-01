interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export default function LabelInput(props: LabelInputProps) {
  const { labelText, type = "text", ...attributes } = props;
  return (
    <div className="flex flex-col">
      <label className="text-foreground">{labelText}</label>
      <input
        {...attributes}
        className="bg-background placeholder-secondary rounded-md"
        type={type}
      />
    </div>
  );
}
