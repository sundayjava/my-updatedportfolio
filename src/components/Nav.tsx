"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import { Container } from "./ui";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled
          ? "border-b border-hairline bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-8">
          <Link
            href="/"
            className={`display text-xl tracking-tight ${scrolled ? "" : "text-on-ink"}`}
            aria-label={`${site.name} home`}
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${scrolled ? "text-secondary hover:text-primary" : "text-on-ink-dim hover:text-on-ink"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle className={scrolled ? "" : "border-hairline-on-ink text-on-ink-dim hover:text-on-ink"} />
            <Link
              href={site.cta.primary.href}
              className="rounded-full bg-accent-fill px-5 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-fill-hover"
            >
              {site.cta.primary.label}
            </Link>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle className={scrolled ? "" : "border-hairline-on-ink text-on-ink-dim hover:text-on-ink"} />
            <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            <span className={`block h-px w-6 ${scrolled ? "bg-primary" : "bg-on-ink"}`} />
            <span className={`mt-1.5 block h-px w-6 ${scrolled ? "bg-primary" : "bg-on-ink"}`} />
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-hairline bg-paper md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.cta.primary.href}
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-accent-fill px-5 py-3 text-center text-sm font-medium text-on-accent"
            >
              {site.cta.primary.label}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
