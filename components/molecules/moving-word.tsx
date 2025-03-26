import React, { useEffect, useState } from "react";
import MovingCharacter from "../atoms/moving-character";

interface MovingWordProps {
  word: string;
  initialPositions?: { x: number; y: number }[];
  movementSpeed: number;
  rotationSpeed: number;
  width: number;
  height: number;
}

const fontSize = 10;

const getRandomPosition = (width: number, height: number) => ({
  x: Math.random() * (width - fontSize),
  y: Math.random() * (height - fontSize),
});

export default function MovingWord({
  word,
  initialPositions = [],
  movementSpeed = 10,
  rotationSpeed = 10,
  width = 100,
  height = 100,
}: MovingWordProps) {
  const wordToChars = (_word: string) =>
    Array.from(
      _word.split("").filter((char) => char !== " "),
      (v, i) => ({
        id: i,
        value: v,
        ...(initialPositions.length > i
          ? initialPositions[i]
          : getRandomPosition(width, height)),
      })
    );

  const [chars, setChars] = useState<
    { value: string; id: number; x: number; y: number }[]
  >(wordToChars(word));

  useEffect(() => {
    setChars(wordToChars(word));
  }, [word]);

  const getNextPosition = () => getRandomPosition(width, height);

  return (
    <div
      className="relative border-2 border-foreground"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {chars.map((char, i) => (
        <MovingCharacter
          char={char.value}
          movementSpeed={movementSpeed}
          rotationSpeed={rotationSpeed}
          initialPosition={{ x: char.x, y: char.y }}
          getNextPosition={getNextPosition}
          key={i}
        />
      ))}
    </div>
  );
}
