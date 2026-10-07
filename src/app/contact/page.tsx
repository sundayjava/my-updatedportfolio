import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Container, Eyebrow, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to ${site.name} about API access, data licensing, custom software or demand-driven sourcing.`,
  alternates: { canonical: "/contact" },
};

const details = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Response time",
    value: "Within one business day",
  },
  {
    label: "Best for",
    value: "API access, data licensing, enterprise software, custom builds and sourcing enquiries",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Dark band — clears the fixed header and keeps the nav legible, which a
          light-topped page would not. */}
      <section className="bg-ink text-on-ink">
        <Container className="pb-20 pt-28 lg:pb-24 lg:pt-36">
          <Eyebrow tone="ink">Contact</Eyebrow>
          <h1 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)]">
            Start a conversation.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-on-ink-dim">
            Tell us what you are trying to build, or the number you are trying
            to move. We will route you to the person who can actually answer.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <dl className="space-y-8">
                {details.map((d) => (
                  <div key={d.label} className="border-t border-hairline pt-5">
                    <dt className="eyebrow text-muted">{d.label}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-primary">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="border-b border-accent pb-0.5 text-accent"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
