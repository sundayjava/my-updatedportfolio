import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { platform, projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Live platforms built and shipped — data-driven products, content systems and custom software.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-ink text-on-ink">
        <Container className="pb-20 pt-28 lg:pb-24 lg:pt-36">
          <Eyebrow tone="ink">Work</Eyebrow>
          <h1 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)]">
            Things we have built and shipped.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-on-ink-dim">
            Every project below is live. Click through and use it — that is a
            more useful judgement of what we can build than anything we could
            write here.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="space-y-24 lg:space-y-32">
            {projects.map((p, i) => (
              <article key={p.name}>
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-hairline bg-paper-raised ${
                      i % 2 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.name} — ${p.vertical}`}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Eyebrow>{p.vertical}</Eyebrow>
                      {p.owned && (
                        <span className="rounded-full border border-hairline-strong px-2.5 py-0.5 text-[0.6875rem] text-muted">
                          Our own product
                        </span>
                      )}
                      {p.readyToAdapt && (
                        <span className="rounded-full border border-accent px-2.5 py-0.5 text-[0.6875rem] text-accent">
                          Ready to adapt
                        </span>
                      )}
                    </div>

                    <h2 className="display mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)]">
                      {p.name}
                    </h2>

                    <p className="mt-4 max-w-[var(--measure)] leading-relaxed text-secondary">
                      {p.summary}
                    </p>

                    <ul className="mt-7 space-y-2.5 border-t border-hairline pt-7">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-secondary">
                          <span
                            aria-hidden
                            className="mt-2 h-px w-3 shrink-0 bg-accent"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-7 grid gap-5 border-t border-hairline pt-7 sm:grid-cols-2">
                      <div>
                        <dt className="eyebrow text-muted">Role</dt>
                        <dd className="mt-1.5 text-sm text-primary">{p.role}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow text-muted">Built with</dt>
                        <dd className="mt-1.5 text-sm text-primary">
                          {p.stack.join(" · ")}
                        </dd>
                      </div>
                    </dl>

                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-0.5 text-sm font-medium text-accent"
                    >
                      Visit {p.name}
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow tone="ink">Infrastructure</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
              {platform.name}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-on-ink-dim">
              {platform.summary}
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {platform.capabilities.map((c) => (
              <div key={c.title} className="border-t border-hairline-on-ink pt-6">
                <h3 className="text-base font-medium text-on-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-ink-dim">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-hairline-on-ink pt-10 sm:grid-cols-3 lg:grid-cols-5">
            {platform.infrastructure.map((i) => (
              <div key={i.label}>
                <dt className="eyebrow text-on-ink-dim">{i.label}</dt>
                <dd className="mt-1.5 text-sm text-on-ink">{i.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <h2 className="display mx-auto max-w-2xl text-[clamp(1.75rem,3.4vw,2.6rem)]">
            Need something like this built?
          </h2>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-secondary">
            Tell us what you are trying to launch. We will tell you honestly
            whether we are the right people to build it.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact">{site.cta.primary.label}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
