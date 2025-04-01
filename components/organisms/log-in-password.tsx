"use client";

import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import { useTranslations } from "next-intl";
import LinkWrapper from "../atoms/link-wrapper";
import { login } from "@/app/actions/auth";

export default function LogInPassword() {
  const translate = useTranslations("LogIn");

  const [password, setPassword] = React.useState("");

  const confirmPassword = async () => {
    const formData = new FormData();
    formData.append("name", localStorage.getItem("username") || "");
    formData.append("email", localStorage.getItem("email") || "");
    formData.append("password", password);

    const state = await login(formData);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <div className="grow">
          <AnimatePlaceholderInput
            type="password"
            placeholder={translate("Password")}
            value={password}
            inputValueChange={(value) => {
              setPassword(value);
            }}
          />
        </div>
        <div className="grow mb-5">
          <LinkWrapper href="/">{translate("ForgotPassword")}</LinkWrapper>
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
