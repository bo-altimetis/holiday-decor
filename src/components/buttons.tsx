import type { ReactNode } from "react";
import { getSmsHref, getTelHref } from "@/config/business";
import { cx } from "@/lib/cx";

type Variant = "gold" | "outline" | "evergreen";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-evergreen-deep hover:bg-gold-bright",
  outline: "border border-current/30 bg-transparent hover:bg-white/10",
  evergreen: "bg-evergreen text-cream hover:bg-evergreen-mid",
};

function buttonClass(variant: Variant, className?: string) {
  return cx(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold tracking-wide transition-colors",
    variants[variant],
    className,
  );
}

export function SmsLink({
  children,
  variant = "gold",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={getSmsHref()} className={buttonClass(variant, className)}>
      {children}
    </a>
  );
}

export function TelLink({
  children,
  variant = "outline",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={getTelHref()} className={buttonClass(variant, className)}>
      {children}
    </a>
  );
}

export function QuoteLink({
  children,
  variant = "gold",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href="#quote" className={buttonClass(variant, className)}>
      {children}
    </a>
  );
}
