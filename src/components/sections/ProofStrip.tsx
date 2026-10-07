import { proofMetrics } from "@/lib/site";
import { Container } from "../ui";

/**
 * Continues the hero's night sky rather than cutting to a light band — the
 * hero's gradient resolves to --space, and this sits on the same value, so
 * there is no visible seam between them.
 */
export default function ProofStrip() {
  return (
    <div className="bg-space text-on-ink">
      <Container>
        <dl className="grid divide-y divide-hairline-on-ink sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {proofMetrics.map((m) => (
            <div key={m.label} className="px-2 py-12 sm:px-8">
              <dd className="display tabular text-4xl text-on-ink lg:text-5xl">
                {m.value}
              </dd>
              <dt className="mt-3 text-sm font-medium text-on-ink">{m.label}</dt>
              <p className="mt-1 text-xs text-on-ink-dim">{m.note}</p>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
