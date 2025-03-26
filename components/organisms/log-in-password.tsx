import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface LogInPasswordProps {
  username: string;
}

export default function LogInPassword({ username }: LogInPasswordProps) {
  const translate = useTranslations("LogIn");

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
            placeholder={translate("Password")}
            inputValue={password}
            inputValueChange={(value) => {
              setPassword(value);
            }}
          />
        </div>
        <div className="grow mb-5">
          <Link href="/">{translate("ForgotPassword")}</Link>
        </div>
      </div>
      <div className="grow place-self-end">
        <Button
          text={translate("Submit")}
          onClick={() => {
            confirmPassword();
          }}
        />
      </div>
    </div>
  );
}
