import { useTranslations } from "next-intl";
import LogInPassword from "../organisms/log-in-password";
import SingleContentTemplate from "../templates/single-content-template";

export default function LogInPasswordPage() {
  const translate = useTranslations("LogIn");

  return (
    <SingleContentTemplate
      titleText={translate("Title")}
      innerContent={<LogInPassword />}
    />
  );
}
