import { useTranslations } from "next-intl";
import LogInUsername from "../organisms/log-in-username";
import SingleContentTemplate from "../templates/single-content-template";

export default function LogInUsernamePage() {
  const translate = useTranslations("LogIn");

  const innerContent = <LogInUsername />;
  return (
    <SingleContentTemplate
      titleText={translate("Title")}
      innerContent={innerContent}
    />
  );
}
