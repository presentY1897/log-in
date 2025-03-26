import React from "react";
import LogInTemplate from "../templates/log-in-template";
import LogInPassword from "../organisms/log-in-password";

interface LogInPasswordProps {
  username: string;
}

export default function LogInPasswordPage({ username }: LogInPasswordProps) {
  return (
    <LogInTemplate
      titleText="Log In"
      innerContent={<LogInPassword username={username} />}
    />
  );
}
