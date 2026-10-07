import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./ui";

const columns = [
  {
    heading: "Platform",
    links: [
      { label: "APIs", href: "/#platform" },
      { label: "Data products", href: "/#data" },
      { label: "SaaS & developer tools", href: "/#platform" },
      { label: "Software licensing", href: "/#platform" },
    ],
  },
  {
    heading: "Engineering",
    links: [
      { label: "Custom software", href: "/#engineering" },
      { label: "Systems integration", href: "/#engineering" },
      { label: "Business automation", href: "/#engineering" },
      { label: "Data licensing", href: "/#data" },
    ],
  },
  {
    heading: "Commerce & trade",
    links: [
      { label: "Digital marketplace", href: "/#platform" },
      { label: "Demand-driven sourcing", href: "/#sourcing" },
      { label: "Import & export", href: "/#sourcing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Trust & security", href: "/#trust" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline-on-ink bg-ink text-on-ink">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div className="max-w-xs">
            <p className="display text-2xl">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-on-ink-dim">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-sm text-accent-on-ink hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow text-on-ink-dim">{col.heading}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-on-ink-dim transition-colors hover:text-on-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-hairline-on-ink pt-8 text-xs text-on-ink-dim sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Technology · Data · Digital commerce · Demand-driven trade</p>
        </div>
      </Container>
    </footer>
  );
}
