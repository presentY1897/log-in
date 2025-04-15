"use client";

import React from "react";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import { useTranslations } from "next-intl";
import { signUp } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

export default function SignUpPassword() {
  const router = useRouter();
  const translate = useTranslations("SignUp");
  const [password, setPassword] = React.useState("");

  const confirmPasswordMatch = async () => {
    const formData = new FormData();
    formData.append("name", localStorage.getItem("username") || "");
    formData.append("email", localStorage.getItem("email") || "");
    formData.append("password", password);
    const state = await signUp(formData);
    if (state?.errors) {
      if (state.errors.email || state.errors.name) {
        localStorage.setItem("username", "");
        localStorage.setItem("email", "");
        router.push("/sign-up/username");
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <AnimatePlaceholderInput
          type="password"
          placeholder={translate("Password")}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="min-h-10"></div>
      <div className="place-self-end">
        <Button onClick={() => confirmPasswordMatch()}>
          {translate("Submit")}
        </Button>
      </div>
    </div>
  );
}
