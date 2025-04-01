import { format } from "date-fns";
import LabelInput from "../atoms/label-input";
import { useTranslations } from "next-intl";

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

  return (
    <div>
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
    </div>
  );
}
