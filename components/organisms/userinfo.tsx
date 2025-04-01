"use client";

import { format } from "date-fns";
import LabelInput from "../atoms/label-input";
import { useTranslations } from "next-intl";
import Button from "../atoms/button";
import { logOut } from "@/app/actions/auth";

export interface UserInfoProps {
  username: string;
  email: string;
  created: string;
}

export default function UserInfo(props: UserInfoProps) {
  const translate = useTranslations("UserInfo");

  const { username, email, created } = {
    username: props.username,
    email: props.email,
    created: format(props.created, "yyyy-MM-dd"),
  };

  const logOutCallback = async () => {
    await logOut();
  };

  return (
    <div className="flex flex-col gap-4 min-w-[250px]">
      <LabelInput
        labelText={translate("Username")}
        type="text"
        disabled={true}
        value={username}
      ></LabelInput>
      <LabelInput
        labelText={translate("Email")}
        type="email"
        disabled={true}
        value={email}
      ></LabelInput>
      <LabelInput
        labelText={translate("CreatedAt")}
        type="date"
        disabled={true}
        value={created}
      ></LabelInput>
      <div className="place-self-end">
        <Button
          data-testid="logout-button"
          text={translate("LogOut")}
          onClick={() => logOutCallback()}
        ></Button>
      </div>
    </div>
  );
}
