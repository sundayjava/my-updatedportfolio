/**
 * Single source of truth for brand + copy constants.
 *
 * NOTE: `name` is a PLACEHOLDER. Change it here and it updates the nav,
 * footer, metadata, OG tags and every section at once.
 */
export const site = {
  name: "Axiom",
  legalName: "Axiom Technologies Ltd.",
  domain: "https://axiom.example.com",
  tagline: "Digital infrastructure for businesses that cannot afford downtime.",
  description:
    "We develop, own and license APIs, data products and enterprise software — and source physical goods on demand for the clients who need it.",
  email: "contact@axiom.example.com",
  nav: [
    { label: "Platform", href: "/#platform" },
    { label: "Engineering", href: "/#engineering" },
    { label: "Data", href: "/#data" },
    { label: "Sourcing", href: "/#sourcing" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    primary: { label: "Talk to sales", href: "/contact" },
    secondary: { label: "View capabilities", href: "/#platform" },
  },
} as const;

/**
 * PLACEHOLDER METRICS — replace with audited numbers before launch.
 * Deliberately generic so nothing here reads as a real, verifiable claim.
 */
/**
 * Hero backdrop photograph.
 *
 * The hero is designed around a real night-sky photo — astrophotography shot
 * from elevation, which is what gives the natural grain, atmospheric glow and
 * authentic star depth that procedural noise cannot reproduce.
 *
 * Drop the file in /public and set `src` below. While `src` is null the hero
 * falls back to a generated sky so the page is never broken.
 *
 * What the image needs:
 *   - landscape, at least 2400px wide, .webp or .jpg
 *   - genuinely dark through the LEFT HALF, where the headline sits
 *   - the bright nebula / glow mass toward the right, behind the glass cards
 *   - licensed for commercial use (check the licence before shipping)
 */
export const heroBackdrop = {
  src: "/hero-sky.webp" as string | null,
} as const;

/** Leads the hero glass stack — kept out of proofMetrics so it appears once. */
export const heroMetric = {
  value: "40M+",
  label: "Requests served monthly",
  note: "across every product",
} as const;

export const proofMetrics = [
  { value: "99.98%", label: "Platform uptime", note: "trailing 12 months" },
  { value: "<120ms", label: "Median API latency", note: "p50, multi-region" },
  { value: "24/7", label: "Enterprise support", note: "contractual SLA" },
] as const;
