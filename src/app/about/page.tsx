import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { platform } from "@/lib/projects";
import { Button, Container, Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: `The thesis, the platform and the person behind ${site.name}.`,
  alternates: { canonical: "/about" },
};

/** Founder track record — real roles, verifiable. */
const track = [
  {
    role: "Lead Developer",
    org: "Cionde",
    period: "Oct 2025 — Present",
    mode: "Onsite",
    note: "Leading delivery rather than taking tickets.",
  },
  {
    role: "Mobile Developer (Contract)",
    org: "Oyster AI",
    period: "Aug 2025",
    mode: "Remote",
    note: "Shipping against an AI product moving faster than its spec.",
  },
  {
    role: "Fullstack Developer",
    org: "Inhouse HQ",
    period: "Nov 2024 — Nov 2025",
    mode: "Onsite",
    note: "Owning features end to end, frontend through database.",
  },
  {
    role: "Fullstack Developer",
    org: "Shippex",
    period: "Aug 2023 — 2024",
    mode: "Remote",
    note: "Freight and logistics, where a pricing bug is a financial loss.",
  },
  {
    role: "Frontend Developer",
    org: "Jiggle",
    period: "2021",
    mode: "Remote",
    note: "Where it started.",
  },
];

/** The architectural decisions — the reasoning matters more than the stack. */
const decisions = [
  {
    n: "01",
    title: "We built the backend instead of renting one",
    body: "Managed backends are faster to start and more expensive forever. Their pricing changes, their limits change, and their outages become your outages while you explain them to a client. Owning the backend means our cost base is predictable, our uptime is our responsibility, and we can put commitments in a contract and mean them.",
  },
  {
    n: "02",
    title: "We store the data, we do not proxy it",
    body: "Football data arrives by scheduled polling, gets normalised, and is written to our own PostgreSQL. Passing a provider's response straight to the browser is simpler to build and fragile forever — their rate limit becomes your downtime, their schema change becomes your incident. Owning the copy means we can serve fast, survive a provider outage, and change supplier without changing the product.",
  },
  {
    n: "03",
    title: "We self-host, deliberately",
    body: "The platform runs on a Contabo VPS managed through Coolify. That is a trade: we carry the operational burden ourselves. What we get is the thing that makes the whole model work — the marginal cost of the next product on this platform is close to zero. Serverless charges per product. A server you already own does not.",
  },
  {
    n: "04",
    title: "Real-time only where it earns its complexity",
    body: "New posts and fresh match data are pushed to the browser over Server-Sent Events, with Redis handling fan-out across processes. SSE rather than WebSockets because the traffic is one-directional — the server talks, the client listens. Choosing the simpler protocol that fits is not a shortcut; it is one less thing to operate at three in the morning.",
  },
  {
    n: "05",
    title: "Multi-tenant from the first line",
    body: "The backend was never written for one website. Content, identity and data are tenant-aware, so a new product is a new frontend against a platform that already solves publishing, authentication, comments and ingestion. The expensive work was done once. Everything after it is comparatively cheap.",
  },
];

const principles = [
  {
    title: "Own the infrastructure",
    body: "We license what we build. Reselling someone else's platform means inheriting their roadmap, their outages and their price rises — and being unable to commit to any of them on your behalf.",
  },
  {
    title: "Commit in writing",
    body: "Uptime, latency and support response belong in a contract with remedies attached, not on a marketing page. We would rather promise less and be held to it.",
  },
  {
    title: "Earn the next scope",
    body: "We would rather deliver one integration that moves a number you care about than six that fill a statement of work. Scope should be won on results, not negotiated up front.",
  },
  {
    title: "Say the inconvenient thing early",
    body: "If a brief is wrong, the cheapest moment to say so is before anyone writes code. We will tell a client when we are not the right people for the job.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Thesis ── */}
      <section className="bg-ink text-on-ink">
        <Container className="pb-24 pt-28 lg:pb-28 lg:pt-36">
          <Eyebrow tone="ink">About</Eyebrow>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.25rem,5.4vw,4rem)]">
            We own what we build.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-ink-dim">
            Most software companies assemble other people&apos;s services and
            hope the bill never changes. We took the slower route — our own
            backend, our own servers, our own copy of the data — because owning
            the infrastructure is what lets us commit to a client, price
            honestly, and keep the margin that funds the next product.
          </p>
        </Container>
      </section>

      {/* ── Why the company exists ── */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow>The thesis</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
                The same failure, in four industries.
              </h2>
            </div>
            <div className="max-w-[var(--measure)] space-y-5 leading-relaxed text-secondary">
              <p>
                Five years of engineering roles across freight, fintech, AI and
                consumer products produced one repeated observation: the
                businesses that depended most on their software controlled the
                least of it.
              </p>
              <p>
                They rented their infrastructure from vendors who would not
                stand behind it. When a provider raised prices, there was no
                answer. When a provider went down, the engineering team spent
                the morning explaining an outage they had no ability to fix.
                When the business wanted to move faster than the vendor&apos;s
                roadmap, it simply could not.
              </p>
              <p>
                {site.name} exists to be the other side of that trade. We build
                and operate the platform ourselves, which means when we tell a
                client what it will do, that is a promise we are in a position
                to keep.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── The platform ── */}
      <Section tone="ink">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow tone="ink">The platform</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.75rem,3.8vw,2.9rem)]">
              One backend. Many products.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-on-ink-dim">
              {platform.summary} It handles content, identity, ingestion and
              real-time delivery for every product we run — which means a new
              product begins with those four problems already solved, and ends
              up in production in a fraction of the time it would take from a
              blank repository.
            </p>
          </div>

          <div className="mt-16 space-y-px overflow-hidden rounded-2xl bg-hairline-on-ink">
            {decisions.map((d) => (
              <div
                key={d.n}
                className="grid gap-5 bg-ink-raised p-8 lg:grid-cols-[4rem_1fr] lg:gap-10 lg:p-10"
              >
                <span className="display text-2xl text-accent-on-ink">
                  {d.n}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-on-ink">{d.title}</h3>
                  <p className="mt-3 max-w-[var(--measure)] text-sm leading-relaxed text-on-ink-dim">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="eyebrow text-on-ink-dim">What it runs on</p>
            <dl className="mt-6 grid gap-x-10 gap-y-6 border-t border-hairline-on-ink pt-8 sm:grid-cols-3 lg:grid-cols-5">
              {platform.infrastructure.map((i) => (
                <div key={i.label}>
                  <dt className="eyebrow text-on-ink-dim">{i.label}</dt>
                  <dd className="mt-1.5 text-sm text-on-ink">{i.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14 max-w-2xl border-t border-hairline-on-ink pt-10">
            <h3 className="text-lg font-medium text-on-ink">
              Why this matters commercially
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-on-ink-dim">
              The expensive part of a content or data product is not the
              interface — it is the backend underneath it. We paid that cost
              once. Every product we launch afterwards runs on hardware we are
              already paying for, against services that already exist. That is
              what lets us quote a client a timeline an agency cannot match, and
              what lets us launch products of our own without raising money to
              do it.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Founder ── */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-[auto_1fr] lg:gap-20">
            <div className="lg:w-72">
              <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-hairline bg-paper-raised">
                <Image
                  src="/profile-pic.webp"
                  alt="Sunday David Udoekong"
                  fill
                  sizes="(min-width: 1024px) 18rem, 20rem"
                  className="object-cover"
                />
              </div>
              <p className="mt-5 text-base font-medium">Sunday David Udoekong</p>
              <p className="text-sm text-muted">Founder</p>
              <a
                href="/Sunday David CV.pdf"
                className="mt-4 inline-block border-b border-accent pb-0.5 text-sm text-accent"
              >
                Download CV
              </a>
            </div>

            <div>
              <Eyebrow>The founder</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
                Someone who has shipped the thing he is selling.
              </h2>

              <div className="mt-6 max-w-[var(--measure)] space-y-5 leading-relaxed text-secondary">
                <p>
                  Sunday David Udoekong has been building software for other
                  people&apos;s companies since 2021 — frontend first, then
                  full-stack, now leading delivery as Lead Developer at Cionde.
                </p>
                <p>
                  The useful part is not the length of that list. It is what the
                  roles have in common. Freight systems at Shippex, where a
                  pricing error is not a bug report but a financial loss. AI
                  tooling at Oyster. Consumer products at Inhouse HQ. Four
                  industries, one repeated lesson: the systems that matter are
                  the ones that move money or move goods, and those are judged
                  on whether they hold up — not on how they look in a demo.
                </p>
                <p>
                  AllTimeScores is where that experience stopped being advice
                  and became a product. It is live, it carries real traffic
                  against real football data, it is monetised, and it runs on a
                  platform built, deployed and operated by one person. Not a
                  prototype, and not a portfolio piece — a product with
                  infrastructure, uptime and an ad account behind it.
                </p>
              </div>

              <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
                {track.map((t) => (
                  <li
                    key={`${t.org}-${t.period}`}
                    className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-5"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-primary">{t.role}</p>
                      <p className="text-sm text-secondary">{t.org}</p>
                      <p className="mt-1 text-xs text-muted">{t.note}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm text-secondary">{t.period}</p>
                      <p className="eyebrow text-muted">{t.mode}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Principles ── */}
      <Section tone="ink">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow tone="ink">How we operate</Eyebrow>
            <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
              Four things we will not trade away.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-12">
            {principles.map((p, i) => (
              <div key={p.title} className="border-t border-hairline-on-ink pt-6">
                <p className="eyebrow text-on-ink-dim">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-medium text-on-ink">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-[var(--measure)] text-sm leading-relaxed text-on-ink-dim">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Honest stage ── */}
      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <Eyebrow>Where we are</Eyebrow>
              <h2 className="display mt-5 text-[clamp(1.75rem,3.4vw,2.6rem)]">
                Honestly, early.
              </h2>
            </div>
            <div className="max-w-[var(--measure)] space-y-5 leading-relaxed text-secondary">
              <p>
                You would rather hear this from us than find it in diligence.
                {" "}
                {site.name} is early. One product of our own is live and
                monetised. The platform beneath it is in production and already
                capable of carrying more than the product that justified
                building it. We have front-end foundations in several verticals
                that make client delivery materially faster.
              </p>
              <p>
                What we do not have yet is scale, and we are not going to
                present projections as traction. What we do have is unusual for
                this stage: working infrastructure rather than a deck, a founder
                who has shipped and operated it himself, and a cost base low
                enough that we can keep building while we find the customers who
                need this most.
              </p>
              <p className="text-primary">
                If that is the stage you invest at, we would like to talk — and
                we will show you the server, the repository and the numbers as
                they actually are.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink">
        <Container className="text-center">
          <h2 className="display mx-auto max-w-2xl text-[clamp(1.75rem,3.4vw,2.6rem)]">
            Let&apos;s talk about what you are building.
          </h2>
          <div className="mt-9 flex justify-center">
            <Button href="/contact">{site.cta.primary.label}</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
