import { heroMetric, site } from "@/lib/site";
import HeroBackdrop from "../HeroBackdrop";
import { Container } from "../ui";

/**
 * Translucent cards layered over the sky.
 *
 * Widths and offsets are deliberately unequal — the stack reads as an organic
 * composition rather than a flush column. Proportions are taken from the
 * reference: the middle card is widest and sits furthest left, the metric card
 * is narrowest, and the last is indented but reaches nearly as far right.
 *
 * Staggering applies from lg up only; narrower viewports get a plain
 * full-width stack, where offsetting would just look cramped.
 */
const cards = [
  {
    kind: "metric" as const,
    layout: "lg:ml-[4%] lg:w-[71%]",
    ...heroMetric,
  },
  {
    kind: "feature" as const,
    layout: "lg:ml-0 lg:w-full",
    title: "Custom software",
    body: "Tailored platforms built to solve real business problems.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8M9 9l-2 2 2 2M15 9l2 2-2 2" />
      </>
    ),
  },
  {
    kind: "feature" as const,
    layout: "lg:ml-[11%] lg:w-[86%]",
    title: "Automation & intelligence",
    body: "Systems that accelerate performance instead of adding headcount.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-space text-on-ink">
      <HeroBackdrop />

      <Container className="relative pb-24 pt-24 lg:pb-32 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          {/* ── Left: the claim ── */}
          <div>
            <h1 className="display text-[clamp(2.5rem,5.2vw,4rem)]">
              The infrastructure
              <br className="hidden sm:block" /> behind serious business.
            </h1>

            <p className="mt-7 max-w-lg leading-relaxed text-on-ink-dim">
              We develop, own and license the APIs, data products and enterprise
              software that businesses build on — and when a client needs
              physical goods moved across borders, we source and deliver them.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={site.cta.primary.href}
                className="rounded-full bg-accent-fill px-7 py-3.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-fill-hover"
              >
                {site.cta.primary.label}
              </a>
              <a
                href={site.cta.secondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-hairline-on-ink px-7 py-3.5 text-sm font-medium text-on-ink transition-colors hover:border-accent-on-ink hover:text-accent-on-ink"
              >
                {site.cta.secondary.label}
                <span aria-hidden>→</span>
              </a>
            </div>

            {/* ── Annotation callout ──
                Reads left to right: bullet, label, leader line, then the
                pulsing node at the far end of the line. */}
            <div className="mt-16 max-w-md">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-fill"
                />
                <p className="shrink-0 text-sm font-medium text-on-ink">
                  APIs &amp; platforms
                </p>

                {/* leader line fills whatever space is left */}
                <span
                  aria-hidden
                  className="h-px flex-1 bg-linear-to-r from-white/40 via-white/25 to-white/15"
                />

                {/* the blinking node */}
                <span
                  aria-hidden
                  className="relative flex h-4 w-4 shrink-0 items-center justify-center"
                >
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-white/35" />
                  <span className="absolute h-4 w-4 rounded-full border border-white/45" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.55)]" />
                </span>
              </div>

              {/* hangs under the label, clear of the bullet */}
              <p className="ml-4.5 mt-2 max-w-xs text-sm leading-relaxed text-on-ink-dim">
                High-performance infrastructure for web and mobile.
              </p>
            </div>
          </div>

          {/* ── Right: glass card stack ── */}
          <div className="flex flex-col items-stretch space-y-4 lg:space-y-10">
            {cards.map((card) =>
              card.kind === "metric" ? (
                <div
                  key={card.label}
                  className={`rounded-2xl border border-white/15 bg-white/9 p-6 backdrop-blur-xl ${card.layout}`}
                >
                  {/* Stacked, not side-by-side — this is the narrowest card in
                      the stack and a horizontal split wraps badly in it. */}
                  <p className="display tabular text-3xl text-on-ink">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-on-ink">
                    {card.label}
                  </p>
                  <p className="mt-0.5 text-xs text-on-ink-dim">{card.note}</p>
                </div>
              ) : (
                <div
                  key={card.title}
                  className={`rounded-2xl border border-white/15 bg-white/9 p-6 backdrop-blur-xl transition-colors hover:border-white/20 ${card.layout}`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-medium text-on-ink">{card.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-on-ink-dim">
                        {card.body}
                      </p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-wash text-accent-on-ink">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        {card.icon}
                      </svg>
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
