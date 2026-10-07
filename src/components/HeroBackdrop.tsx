import Image from "next/image";
import { heroBackdrop } from "@/lib/site";
import DriftingStars from "./DriftingStars";

/**
 * The sky behind the hero.
 *
 * A real photograph — the grain, atmospheric glow and star depth of a camera
 * exposure are not things procedural noise reproduces convincingly.
 *
 * Two overlays sit on top of it:
 *  - a sparse drifting-star layer, for a little life
 *  - a horizontal scrim, so headline contrast never depends on the photo
 *  - a tall vertical fade resolving to --space, the exact colour the band
 *    below sits on, which is what makes the seam between them invisible
 */
export default function HeroBackdrop() {
  const photo = heroBackdrop.src;

  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-space">
      {photo && (
        <Image
          src={photo}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,6,10,0.78) 0%, rgba(5,6,10,0.58) 34%, rgba(5,6,10,0.22) 66%, rgba(5,6,10,0.34) 100%)",
        }}
      />

      {/* Eased over half the hero — a two-stop gradient bands visibly at this
          distance, so the falloff is stepped to stay smooth. */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "linear-gradient(to bottom," +
            "rgba(7,8,12,0) 0%," +
            "rgba(7,8,12,0.12) 26%," +
            "rgba(7,8,12,0.38) 48%," +
            "rgba(7,8,12,0.68) 68%," +
            "rgba(7,8,12,0.89) 84%," +
            "rgba(7,8,12,0.98) 94%," +
            "var(--space) 100%)",
        }}
      />

      {/* Above the scrim — otherwise the motion is dimmed into invisibility */}
      <DriftingStars />
    </div>
  );
}
