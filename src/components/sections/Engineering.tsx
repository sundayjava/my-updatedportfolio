import { Container, Eyebrow, Section } from "../ui";

const engagements = [
  {
    index: "01",
    name: "Embedded team",
    body: "Our engineers join yours — your standups, your repository, your roadmap. For companies with a technical function that needs capacity, not direction.",
    terms: ["Monthly retainer", "Named engineers", "Scales up or down"],
  },
  {
    index: "02",
    name: "Project delivery",
    body: "A defined scope, a fixed outcome and a date we commit to. For companies that know exactly what they need built.",
    terms: ["Fixed scope & price", "Milestone billing", "Handover documented"],
  },
  {
    index: "03",
    name: "Technical partnership",
    body: "We build it, then we keep it running — monitoring, iteration and support under SLA. For companies without an in-house engineering team.",
    terms: ["Build plus operate", "Contractual SLA", "Long-term ownership"],
  },
];

const capabilities = [
  { title: "Web platforms", body: "Customer-facing products and internal systems, built to scale." },
  { title: "Mobile applications", body: "Native and cross-platform, shipped to both app stores." },
  { title: "APIs & backend systems", body: "The services your product and your partners depend on." },
  { title: "Systems integration", body: "Making software that was never designed to talk, talk." },
  { title: "Internal tools & automation", body: "Removing the manual process that is costing you headcount." },
  { title: "Data pipelines", body: "Collection, transformation and delivery you can rely on." },
];

export default function Engineering() {
  return (
    <Section id="engineering">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Engineering services</Eyebrow>
          <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
            We build the software
            <br className="hidden sm:block" /> other companies run on.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            Not every problem is solved by licensing a product. When a client
            needs something built for them specifically, we build it — with the
            same engineering standards, SLAs and documentation we hold our own
            platform to.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-muted">How we engage</p>
            <div className="mt-6 divide-y divide-hairline border-y border-hairline">
              {engagements.map((e) => (
                <div key={e.index} className="py-8">
                  <div className="flex items-baseline gap-5">
                    <span className="display text-2xl text-accent">
                      {e.index}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-primary">
                        {e.name}
                      </h3>
                      <p className="mt-2 max-w-[var(--measure)] text-sm leading-relaxed text-secondary">
                        {e.body}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                        {e.terms.map((t) => (
                          <li
                            key={t}
                            className="flex items-center gap-2 text-xs text-muted"
                          >
                            <span
                              aria-hidden
                              className="h-px w-2.5 shrink-0 bg-accent"
                            />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-muted">What we build</p>
            <dl className="mt-6 space-y-6">
              {capabilities.map((c) => (
                <div key={c.title}>
                  <dt className="text-sm font-medium text-primary">
                    {c.title}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-secondary">
                    {c.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
