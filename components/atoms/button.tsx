interface ButtonProps {
  text: string;
  width?: string;
  height?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({
  text,
  width,
  height,
  onClick,
  onMouseDown,
  onMouseUp,
  onKeyDown,
  onKeyUp,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className="bg-foreground text-background rounded-lg border-2 border-foreground px-2 py-1 hover:bg-background hover:text-foreground hover:border-foreground"
      style={{ width: width, height: height }}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
