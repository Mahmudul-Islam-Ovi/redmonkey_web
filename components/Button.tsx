import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "primary";
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function Button({
  href,
  children,
  variant = "default",
  className = "",
  onClick,
  isActive = false,
}: ButtonProps) {
  const baseClasses = "text-sm px-1 py-2 rounded transition";
  const variantClasses = {
    default: isActive ? "text-orange-600" : "hover:text-orange-600",
    primary: "btn btn-primary",
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <Link href={href} className={finalClassName} onClick={onClick}>
      {children}
    </Link>
  );
}
