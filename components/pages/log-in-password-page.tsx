import SingleContentTemplate from "../templates/single-content-template";
import LogInPassword from "../organisms/log-in-password";
import { useTranslations } from "next-intl";

interface LogInPasswordProps {
  username: string;
}

export default function LogInPasswordPage({ username }: LogInPasswordProps) {
  const translate = useTranslations("LogIn");

  return (
    <SingleContentTemplate
      titleText={translate("Title")}
      innerContent={<LogInPassword username={username} />}
    />
  );
}
