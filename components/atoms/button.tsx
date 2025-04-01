interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  text: string;
  width?: string;
  height?: string;
}

export default function Button(props: ButtonProps) {
  const { text, width, height, ...attributes } = props;
  return (
    <button
      {...attributes}
      className="bg-foreground text-background rounded-lg border-2 border-foreground px-2 py-1 hover:bg-background hover:text-foreground hover:border-foreground"
      style={{ width: width, height: height }}
    >
      {text}
    </button>
  );
}
