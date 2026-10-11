interface EnrollmentButtonProps {
  variant?: "solid" | "outline";
  className?: string;
  href?: string;
}

export function EnrollmentButton({ variant = "solid", className = "", href = "/lp" }: EnrollmentButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-colors";

  const variantClasses =
    variant === "solid"
      ? "bg-accent text-accent-foreground shadow-cta hover:bg-[#B98727]"
      : "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground";

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      Quero me matricular
    </a>
  );
}
