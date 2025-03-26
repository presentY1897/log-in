"use client";

import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface LogInUsername {
  initialUsername?: string;
}

export default function LogInUsername({ initialUsername }: LogInUsername) {
  const translate = useTranslations("LogIn");

  const [username, setUsername] = React.useState(initialUsername || "");

  const confirmUsername = () => {};

  return (
    <div className="flex flex-col gap-2">
      <div className="grow">
        <AnimatePlaceholderInput
          type="text"
          placeholder={translate("Username")}
          inputValue={username}
          inputValueChange={(e) => {
            setUsername(e);
          }}
        />
      </div>
      <div className="grow mb-5">
        <Link href="/">{translate("ForgotUsername")}</Link>
      </div>
      <div className="grow grid grid-flow-col justify-between items-center">
        <Link href="/">{translate("CreateAccount")}</Link>
        <Button
          text={translate("Next")}
          onClick={() => {
            confirmUsername();
          }}
        />
      </div>
    </div>
  );
}
