import { useEffect, useRef, useState } from "react";

interface MovingCharacterProps {
  char: string;
  movementSpeed: number;
  rotationSpeed: number;
  initialPosition: {
    x: number;
    y: number;
  };
  getNextPosition: () => { x: number; y: number };
}

export default function MovingCharacter({
  char,
  movementSpeed = 10,
  rotationSpeed = 10,
  initialPosition = { x: 0, y: 0 },
  getNextPosition,
}: MovingCharacterProps) {
  const [position, setPosition] = useState(initialPosition);
  const [moveDuration, setMoveDuration] = useState(0);
  const positionRef = useRef(position);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const move = () => {
      const nextPosition = getNextPosition();
      const prev = positionRef.current;

      const dx = nextPosition.x - prev.x;
      const dy = nextPosition.y - prev.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const duration = dist / movementSpeed;
      setPosition(nextPosition);
      setMoveDuration(duration);
      positionRef.current = nextPosition;

      timeoutId = setTimeout(move, duration * 1000);
    };

    timeoutId = setTimeout(move, 0);

    return () => clearTimeout(timeoutId);
  }, [movementSpeed]);

  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: `transform ${moveDuration}s linear`,
      }}
    >
      <div
        className="animate-spin"
        style={{
          animation: `spin ${360 / rotationSpeed}s linear infinite`,
        }}
      >
        {char}
      </div>
    </div>
  );
}
