import { Container, Eyebrow } from "../ui";

/**
 * Deliberately lower visual weight than the technology sections:
 * no cards, narrower measure, hairline framing only. The company is a
 * technology business that trades when there is a commercial opportunity —
 * not a trading company. The layout should say that before the copy does.
 */
const capabilities = [
  {
    title: "Import on order",
    body: "We source and import against a confirmed client order, not speculative inventory.",
  },
  {
    title: "Export on order",
    body: "Outbound fulfilment for clients selling into markets where we already operate.",
  },
  {
    title: "International procurement",
    body: "Supplier identification, verification and negotiation on your behalf.",
  },
  {
    title: "Cross-border distribution",
    body: "Digital and physical products delivered into the territories we cover.",
  },
];

export default function Sourcing() {
  return (
    <section id="sourcing" className="border-y border-hairline bg-paper-raised">
      <Container className="py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <Eyebrow>Secondary capability</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.5rem,2.9vw,2.1rem)]">
              Sourcing &amp; trade, on demand.
            </h2>
          </div>

          <div>
            <p className="max-w-[var(--measure)] leading-relaxed text-secondary">
              Occasionally a client needs something our software cannot ship — a
              device, a component, a physical order across a border. We handle
              it, on a demand-driven basis, because the relationship warrants
              it. This is a service we offer, not the business we are in.
            </p>

            <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.title}>
                  <dt className="text-sm font-medium text-primary">{c.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-secondary">
                    {c.body}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 border-t border-hairline pt-6 text-xs leading-relaxed text-muted">
              Undertaken where legally permitted and subject to the licensing,
              customs and export-control requirements of each jurisdiction.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
