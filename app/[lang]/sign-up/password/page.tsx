import SignUpPassword from "@/components/organisms/sign-up-password";
import SingleContentTemplate from "@/components/templates/single-content-template";
import { useTranslations } from "next-intl";

export default function Page() {
  const translate = useTranslations("SignUp");
  const innerContext = <SignUpPassword />;
  return (
    <SingleContentTemplate
      titleText={translate("Title")}
      innerContent={innerContext}
    ></SingleContentTemplate>
  );
}
