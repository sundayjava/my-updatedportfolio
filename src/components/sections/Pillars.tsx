import { Container, Eyebrow, Section } from "../ui";

const pillars = [
  {
    index: "01",
    title: "Digital Products & Technology",
    lead:
      "The core of the business. Products we build, own and license — not resell.",
    items: [
      "APIs & developer platforms",
      "Data and data services",
      "SaaS products",
      "Developer tooling",
      "Software licences",
      "Digital subscriptions",
    ],
  },
  {
    index: "02",
    title: "B2B Technology Services",
    lead:
      "Where our platform meets your stack — contracted, integrated and supported.",
    items: [
      "Enterprise API access",
      "Data licensing agreements",
      "Custom integrations",
      "Enterprise software",
      "Managed developer accounts",
      "Business process automation",
    ],
  },
  {
    index: "03",
    title: "Digital Commerce",
    lead:
      "Distribution at scale, for our own catalogue and for partners we represent.",
    items: [
      "First-party digital products",
      "Licensed third-party catalogue",
      "Digital licences & keys",
      "Templates, tools & resources",
      "International distribution",
    ],
  },
];

export default function Pillars() {
  return (
    <Section id="platform">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
            Three businesses, one platform.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">
            We are a technology and digital commerce company. Everything below
            runs on infrastructure we own, which is what lets us license it,
            integrate it and stand behind it contractually.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.index}
              className="group flex flex-col bg-paper-raised p-8 transition-colors hover:bg-accent-wash lg:p-10"
            >
              <p className="eyebrow text-muted">{p.index}</p>
              <h3 className="mt-5 text-xl font-medium leading-snug text-primary lg:min-h-14">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary lg:min-h-10">
                {p.lead}
              </p>
              <ul className="mt-8 space-y-2.5 border-t border-hairline pt-8">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-secondary"
                  >
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
