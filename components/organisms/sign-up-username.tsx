import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";

export default function SignUpUsername() {
  const [username, setUsername] = React.useState("");

  const confirmUsername = () => {
    console.log("check with username", username);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <AnimatePlaceholderInput
          type="text"
          placeholder="Username"
          inputValue={username}
          inputValueChange={(value) => setUsername(value)}
        />
      </div>
      <div className="min-h-10"></div>
      <div className="place-self-end">
        <Button text="Next" onClick={() => confirmUsername()} />
      </div>
    </div>
  );
}
