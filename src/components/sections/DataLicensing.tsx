import { Container, Eyebrow, Section } from "../ui";

const tiers = [
  {
    name: "Query access",
    for: "Teams validating a use case",
    terms: ["Metered API access", "Standard schema", "Community support"],
  },
  {
    name: "Licensed feed",
    for: "Products with data at their core",
    terms: [
      "Bulk + streaming delivery",
      "Negotiated refresh cadence",
      "Commercial redistribution rights",
    ],
    featured: true,
  },
  {
    name: "Exclusive derivation",
    for: "Clients who need a moat",
    terms: [
      "Custom collection & enrichment",
      "Category exclusivity, by contract",
      "Dedicated engineering liaison",
    ],
  },
];

export default function DataLicensing() {
  return (
    <Section id="data">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Data &amp; licensing</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
              Data you can build a business on.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary">
              Most data vendors sell access. We license rights. The difference
              matters the moment you want to put our data inside a product you
              sell — so our agreements are written for that from the start.
            </p>
            <ul className="mt-8 space-y-3 border-t border-hairline pt-8 text-sm text-secondary">
              {[
                "Provenance documented for every field",
                "Versioned schemas with deprecation notice",
                "Redistribution rights negotiated, not assumed",
                "Residency and retention set per contract",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl border p-8 transition-colors ${
                  t.featured
                    ? "border-accent bg-accent-wash"
                    : "border-hairline bg-paper-raised hover:border-hairline-strong"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-medium text-primary">{t.name}</h3>
                  {t.featured && (
                    <span className="eyebrow shrink-0 text-accent">
                      Most contracted
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{t.for}</p>
                <ul className="mt-6 space-y-2.5 border-t border-hairline pt-6">
                  {t.terms.map((term) => (
                    <li key={term} className="flex gap-3 text-sm text-secondary">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
