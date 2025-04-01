import { useTranslations } from "next-intl";
import UserInfo, { UserInfoProps } from "../organisms/userinfo";
import SingleContentTemplate from "../templates/single-content-template";

interface UserInfoPageProps {
  userInfo: UserInfoProps;
}

export default function UserInfoPage(props: UserInfoPageProps) {
  const { userInfo } = props;
  const translate = useTranslations("UserInfo");
  const innerContent = <UserInfo {...userInfo} />;

  return (
    <SingleContentTemplate
      titleText={translate("Title")}
      innerContent={innerContent}
    />
  );
}
