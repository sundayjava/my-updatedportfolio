import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { Container, Eyebrow, Section } from "../ui";

/**
 * Real shipped work, pulled from lib/projects.ts. This replaced a set of
 * invented sector case studies — nothing here is claimed unless it is live.
 */
export default function CaseStudies() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);
  if (!featured.length) return null;

  return (
    <Section id="work" tone="ink">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="ink">Selected work</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
              Live products, not slide decks.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 border-b border-accent-on-ink pb-0.5 text-sm font-medium text-accent-on-ink"
          >
            See all work
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {featured.map((p) => (
            <article key={p.name}>
              <Link
                href="/work"
                className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-hairline-on-ink bg-ink-raised"
              >
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.vertical}`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-top opacity-95 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
              <p className="eyebrow mt-6 text-on-ink-dim">{p.vertical}</p>
              <h3 className="mt-3 text-xl font-medium text-on-ink">{p.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-on-ink-dim">
                {p.summary}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
