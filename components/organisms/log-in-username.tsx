import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import Link from "next/link";

interface LogInUsername {
  initialUsername?: string;
}

export default function LogInUsername({ initialUsername }: LogInUsername) {
  const [username, setUsername] = React.useState(initialUsername || "");

  const confirmUsername = () => {};

  return (
    <div className="flex flex-col gap-2">
      <div className="grow">
        <AnimatePlaceholderInput
          type="text"
          placeholder="Enter username"
          inputValue={username}
          inputValueChange={(e) => {
            setUsername(e);
          }}
        />
      </div>
      <div className="grow mb-5">
        <Link href="/">Are you forgot email?</Link>
      </div>
      <div className="grow grid grid-flow-col justify-between items-center">
        <Link href="/">Create Account</Link>
        <Button
          text="Confirm"
          onClick={() => {
            confirmUsername();
          }}
        />
      </div>
    </div>
  );
}
