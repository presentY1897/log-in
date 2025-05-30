"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { EmailUtils } from "@/utils/utils";
import { checkDuplicateEmail } from "@/app/lib/session";
import AnimatePlaceholderInput from "@/components/atoms/animate-placeholder-input";
import Button from "@/components/atoms/button";

export default function SignUpUsername() {
  const translate = useTranslations("SignUp");
  const [username, setUsername] = React.useState("");
  const router = useRouter();

  const confirmUsername = async () => {
    if (username.length === 0) {
      return false;
    }
    const email = EmailUtils.validate.test(username)
      ? username
      : username + "@" + EmailUtils.defaultEmail;
    const { state, error } = await checkDuplicateEmail(email);
    if (error) {
      console.error(error.message);
      return false;
    }
    if (state) {
      console.log("Email already exists");
      return false;
    }
    localStorage.setItem("name", email.split("@")[0]);
    localStorage.setItem("email", email);
    router.push("/sign-up/password");
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
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
      <div className="min-h-10"></div>
      <div className="place-self-end">
        <Button data-testid="username-submit" onClick={() => confirmUsername()}>
          {translate("Next")}
        </Button>
      </div>
    </div>
  );
}
