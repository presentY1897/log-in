import React, { useEffect, useState } from "react";
import MovingCharacter from "../atoms/moving-character";

interface MovingWordProps {
  word: string;
  movementSpeed: number;
  rotationSpeed: number;
  width: number;
  height: number;
}

const getRandomPosition = (width: number, height: number) => ({
  x: Math.random() * width,
  y: Math.random() * height,
});

export default function MovingWord({
  word,
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
        ...getRandomPosition(width, height),
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
      className="relative"
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
