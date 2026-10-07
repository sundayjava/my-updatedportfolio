import { Container, Eyebrow, Section } from "../ui";

/** PLACEHOLDER — do not publish a compliance claim you cannot evidence. */
const commitments = [
  {
    title: "Contractual SLA",
    body: "Uptime, latency and support response committed in writing, with remedies.",
  },
  {
    title: "Data residency",
    body: "Processing region fixed per agreement, with isolation enforced in infrastructure.",
  },
  {
    title: "Access & audit",
    body: "Role-scoped credentials, full audit logging, exportable on request.",
  },
  {
    title: "Encryption",
    body: "In transit and at rest, with documented key management and rotation.",
  },
  {
    title: "Continuity",
    body: "Multi-region failover, tested restores, published incident history.",
  },
  {
    title: "Ownership",
    body: "Your data stays yours. No training, no resale, no secondary use.",
  },
];

export default function Trust() {
  return (
    <Section id="trust" tone="ink">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="ink">Trust</Eyebrow>
          <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
            Built to survive procurement.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-on-ink-dim">
            Enterprise buyers do not ask what our platform can do. They ask what
            happens when it fails, who is liable, and where the data sits. These
            are our answers.
          </p>
        </div>

        <dl className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c) => (
            <div key={c.title} className="border-t border-hairline-on-ink pt-6">
              <dt className="text-base font-medium text-on-ink">{c.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-on-ink-dim">
                {c.body}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
