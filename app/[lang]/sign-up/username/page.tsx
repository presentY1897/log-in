import { useTranslations } from "next-intl";
import SignUpUsername from "@/components/organisms/sing-up/sign-up-username";
import SingleContentTemplate from "@/components/templates/single-content-template";

export default function Page() {
  const translate = useTranslations("SignUp");
  const innerContext = <SignUpUsername />;
  return (
    <SingleContentTemplate
      titleText={translate("Title")}
      innerContent={innerContext}
    ></SingleContentTemplate>
  );
}
