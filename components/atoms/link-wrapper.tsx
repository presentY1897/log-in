import Link from "next/link";
import { ReactNode } from "react";

interface LinkWrapperProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export default function LinkWrapper({ children, ...props }: LinkWrapperProps) {
  return (
    <Link {...props} className="text-sm text-link">
      {children}
    </Link>
  );
}
