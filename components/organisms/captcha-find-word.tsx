import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import MovingWord from "../molecules/moving-word";
import Button from "../atoms/button";

interface CaptchaFindWord {
  word: string;
  initialPositions?: { x: number; y: number }[];
  difficulty: number;
  size: {
    width: number;
    height: number;
  };
}

export default function CaptchaFindWord({
  word,
  initialPositions = [],
  difficulty = 1,
  size,
}: CaptchaFindWord) {
  const [userInput, setUserInput] = React.useState("");

  const confirmButtonClicked = () => {
    if (userInput === word) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };

  return (
    <div className="flex flex-col space-y-4 gap-2">
      <MovingWord
        word={word}
        initialPositions={initialPositions}
        movementSpeed={10 * difficulty}
        rotationSpeed={5 * difficulty}
        width={size.width}
        height={size.height}
      />
      <AnimatePlaceholderInput
        type="text"
        placeholder="Enter the correct word"
        value={userInput}
        inputValueChange={(value) => setUserInput(value)}
      />
      <div className="grid justify-items-end">
        <Button text="Submit" onClick={() => confirmButtonClicked()} />
      </div>
    </div>
  );
}
