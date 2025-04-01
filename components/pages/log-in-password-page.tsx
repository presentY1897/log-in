import SingleContentTemplate from "../templates/single-content-template";
import LogInPassword from "../organisms/log-in-password";
import { useTranslations } from "next-intl";

export default function LogInPasswordPage() {
  const translate = useTranslations("LogIn");

  return (
    <SingleContentTemplate
      titleText={translate("Title")}
      innerContent={<LogInPassword />}
    />
  );
}
