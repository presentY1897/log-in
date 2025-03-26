import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import { useTranslations } from "next-intl";

export default function SignUpUsername() {
  const translate = useTranslations("SignUp");
  const [username, setUsername] = React.useState("");

  const confirmUsername = () => {
    console.log("check with username", username);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <AnimatePlaceholderInput
          type="text"
          placeholder={translate("Username")}
          inputValue={username}
          inputValueChange={(value) => setUsername(value)}
        />
      </div>
      <div className="min-h-10"></div>
      <div className="place-self-end">
        <Button text={translate("Next")} onClick={() => confirmUsername()} />
      </div>
    </div>
  );
}
