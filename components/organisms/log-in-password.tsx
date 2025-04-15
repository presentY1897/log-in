"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { logIn } from "@/app/actions/auth";
import { type FormState } from "@/app/lib/definitions";
import AnimatePlaceholderInput from "../atoms/animate-placeholder-input";
import Button from "../atoms/button";
import LinkWrapper from "../atoms/link-wrapper";

export default function LogInPassword() {
  const router = useRouter();
  const translate = useTranslations("LogIn");

  const [password, setPassword] = React.useState("");
  const [state, setState] = React.useState<FormState>();

  const confirmPassword = async () => {
    const formData = new FormData();
    formData.append("name", localStorage.getItem("username") || "");
    formData.append("email", localStorage.getItem("email") || "");
    formData.append("password", password);

    const state = await logIn(formData);
    if (state?.errors) {
      if (state.errors.email || state.errors.name) {
        localStorage.setItem("username", "");
        localStorage.setItem("email", "");
        router.push("/log-in/username");
      }
    }
    setState(state);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <div className="grow">
          <AnimatePlaceholderInput
            data-testid="password-input"
            type="password"
            placeholder={translate("Password")}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="grow mb-5">
          <LinkWrapper href="/">{translate("ForgotPassword")}</LinkWrapper>
          {state?.errors?.password && (
            <div data-testid="password-error">
              {state.errors.password.map((error) => {
                return (
                  <p key={error} className="text-red-500">
                    {error}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="grow place-self-end">
        <Button
          data-testid="password-submit-button"
          onClick={() => {
            confirmPassword();
          }}
        >
          {translate("Submit")}
        </Button>
      </div>
    </div>
  );
}
