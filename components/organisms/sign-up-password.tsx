import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import { useTranslations } from "next-intl";

export default function SignUpPassword() {
  const translate = useTranslations("SignUp");
  const [password, setPassword] = React.useState("");

  const confirmPasswordMatch = () => {
    console.log("check with password", password);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <AnimatePlaceholderInput
          type="password"
          placeholder={translate("Password")}
          value={password}
          inputValueChange={(value) => setPassword(value)}
        />
      </div>
      <div className="min-h-10"></div>
      <div className="place-self-end">
        <Button
          text={translate("Submit")}
          onClick={() => confirmPasswordMatch()}
        />
      </div>
    </div>
  );
}
