import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import Link from "next/link";

interface LogInPasswordProps {
  username: string;
}

export default function LogInPassword({ username }: LogInPasswordProps) {
  const [password, setPassword] = React.useState("");

  const confirmPassword = () => {
    console.log("check with username and password", username);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <div className="grow">
          <AnimatePlaceholderInput
            type="password"
            placeholder="Password"
            inputValue={password}
            inputValueChange={(value) => {
              setPassword(value);
            }}
          />
        </div>
        <div className="grow mb-5">
          <Link href="/">Are you forgot password?</Link>
        </div>
      </div>
      <div className="grow place-self-end">
        <Button
          text="Log In"
          onClick={() => {
            confirmPassword();
          }}
        />
      </div>
    </div>
  );
}
