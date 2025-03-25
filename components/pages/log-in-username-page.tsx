import LogInUsername from "../organisms/log-in-username";
import LogInTemplate from "../templates/log-in-template";

export default function LogInUsernamePage() {
  const innerContent = <LogInUsername />;
  return <LogInTemplate titleText="Log in" innerContent={innerContent} />;
}
