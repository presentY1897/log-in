"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { EmailUtils } from "@/utils/utils";
import AnimatePlaceholderInput from "@/components/atoms/animate-placeholder-input";
import Button from "@/components/atoms/button";
import LinkWrapper from "@/components/atoms/link-wrapper";

interface LogInUsername {
  initialUsername?: string;
}

export default function LogInUsername({ initialUsername }: LogInUsername) {
  const translate = useTranslations("LogIn");
  const [username, setUsername] = React.useState(initialUsername || "");
  const router = useRouter();

  const confirmUsername = () => {
    if (username.length === 0) {
      return false;
    }
    if (!EmailUtils.validate.test(username)) {
      const email = username + "@" + EmailUtils.defaultEmail;
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      setUsername(email);
    } else {
      localStorage.setItem("username", username.split("@")[0]);
      localStorage.setItem("email", username);
    }
    router.push("/log-in/password");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grow">
        <AnimatePlaceholderInput
          data-testid="username-input"
          type="text"
          placeholder={translate("Username")}
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="grow mb-5">
        <LinkWrapper href="/">{translate("ForgotUsername")}</LinkWrapper>
      </div>
      <div className="grow grid grid-flow-col justify-between items-center">
        <LinkWrapper href="/sign-up/username">
          {translate("CreateAccount")}
        </LinkWrapper>
        <Button
          data-testid="username-submit-button"
          onClick={() => {
            confirmUsername();
          }}
        >
          {translate("Next")}
        </Button>
      </div>
    </div>
  );
}
