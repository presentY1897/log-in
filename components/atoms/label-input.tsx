export default function LabelInput({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="text-primary">{label}</label>
      <input
        className="bg-tertiary placeholder-secondary rounded-md"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
