import { useTranslations } from "next-intl";
import LogInUsername from "@/components/organisms/log-in-username";
import SingleContentTemplate from "@/components/templates/single-content-template";

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
