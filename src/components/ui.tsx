import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  tone = "paper",
  children,
  className = "",
}: {
  id?: string;
  tone?: "paper" | "ink";
  children: ReactNode;
  className?: string;
}) {
  const tones = {
    paper: "bg-paper text-primary",
    ink: "bg-ink text-on-ink",
  };
  return (
    <section
      id={id}
      className={`py-[var(--section-y)] ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "paper",
}: {
  children: ReactNode;
  tone?: "paper" | "ink";
}) {
  return (
    <p className={`eyebrow ${tone === "ink" ? "text-accent-on-ink" : "text-accent"}`}>
      {children}
    </p>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "on-ink";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variants = {
    primary: "bg-accent-fill text-on-accent hover:bg-accent-fill-hover",
    ghost:
      "border border-hairline-strong text-primary hover:border-accent hover:text-accent",
    "on-ink": "bg-on-ink text-ink hover:bg-white",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
