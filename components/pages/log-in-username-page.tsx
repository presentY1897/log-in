import { useTranslations } from "next-intl";
import LogInUsername from "../organisms/log-in-username";
import LogInTemplate from "../templates/log-in-template";

export default function LogInUsernamePage() {
  const translate = useTranslations("LogIn");

  const innerContent = <LogInUsername />;
  return (
    <LogInTemplate titleText={translate("Title")} innerContent={innerContent} />
  );
}
