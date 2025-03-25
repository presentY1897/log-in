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
      className="bg-foreground text-background rounded-lg border-2 border-foreground p-2 hover:bg-background hover:text-foreground hover:border-foreground"
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
