interface ButtonProps {
  text: string;
  width?: string;
  height?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="bg-primary text-background rounded-lg p-2 hover:bg-tertiary hover:text-foreground"
      style={{ width: props.width, height: props.height }}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
    >
      {props.text}
    </button>
  );
}
