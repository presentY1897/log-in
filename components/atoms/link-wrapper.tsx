import Link from "next/link";
import { ReactNode } from "react";

interface LinkWrapperProps {
  href: string;
  children: ReactNode;
}

export default function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <Link className="text-sm text-blue-500" href={href}>
      {children}
    </Link>
  );
}
