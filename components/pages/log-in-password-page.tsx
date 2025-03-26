import LogInTemplate from "../templates/log-in-template";
import LogInPassword from "../organisms/log-in-password";
import { useTranslations } from "next-intl";

interface LogInPasswordProps {
  username: string;
}

export default function LogInPasswordPage({ username }: LogInPasswordProps) {
  const translate = useTranslations("LogIn");

  return (
    <LogInTemplate
      titleText={translate("Title")}
      innerContent={<LogInPassword username={username} />}
    />
  );
}
