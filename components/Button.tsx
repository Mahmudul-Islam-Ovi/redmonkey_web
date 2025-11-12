import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "primary";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  href,
  children,
  variant = "default",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "text-sm px-4 py-2 rounded transition hover:text-orange-600";
  const variantClasses = {
    default: "hover:text-orange-600",
    primary: "btn btn-primary",
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <Link href={href} className={finalClassName} onClick={onClick}>
      {children}
    </Link>
  );
}
