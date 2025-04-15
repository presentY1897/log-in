import Link from "next/link";

interface LinkWrapperProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function LinkWrapper({ children, ...props }: LinkWrapperProps) {
  return (
    <Link {...props} className="text-sm text-link">
      {children}
    </Link>
  );
}
