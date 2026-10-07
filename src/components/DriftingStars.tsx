"use client";

import { useEffect, useRef } from "react";

/**
 * Drifting, twinkling stars over the hero photograph, with the occasional
 * shooting star.
 *
 * Sits ABOVE the scrim so the motion actually reads. Placement is biased away
 * from the left column where the headline sits, so the type stays clean
 * without having to dim the whole layer.
 *
 * Still cheap: ~90 arcs plus a few cached glow sprites per frame, paused when
 * offscreen or hidden, and nothing at all under reduced motion.
 */
const STAR_COUNT = 40;
const GLOW_SHARE = 0.22; // fraction that carry a halo
const METEOR_CHANCE = 0.0045; // per frame, when none is active

type Star = { x: number; y: number; r: number; a: number; p: number; v: number; glow: boolean };
type Meteor = { x: number; y: number; vx: number; vy: number; len: number; life: number };

export default function DriftingStars() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let last = 0;
    let stars: Star[] = [];
    let meteor: Meteor | null = null;
    let glowSprite: HTMLCanvasElement | null = null;

    const makeGlow = () => {
      const size = 22;
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const g = c.getContext("2d");
      if (!g) return c;
      const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, "rgba(255,255,255,0.75)");
      grad.addColorStop(0.3, "rgba(255,255,255,0.22)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = grad;
      g.fillRect(0, 0, size, size);
      return c;
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      glowSprite = makeGlow();

      stars = Array.from({ length: STAR_COUNT }, () => {
        // keep most of them clear of the headline column on the left
        const x = Math.random() < 0.78 ? w * (0.3 + Math.random() * 0.7) : Math.random() * w * 0.3;
        return {
          x,
          y: Math.random() * h * 0.85,
          r: 0.7 + Math.random() * 1.3,
          a: 0.45 + Math.random() * 0.55,
          p: Math.random() * Math.PI * 2,
          v: 0.004 + Math.random() * 0.014,
          glow: Math.random() < GLOW_SHARE,
        };
      });
    };

    const spawnMeteor = () => {
      const fromLeft = Math.random() < 0.5;
      const speed = 0.45 + Math.random() * 0.35;
      meteor = {
        x: fromLeft ? w * (0.1 + Math.random() * 0.3) : w * (0.5 + Math.random() * 0.4),
        y: h * (0.05 + Math.random() * 0.35),
        vx: speed,
        vy: speed * (0.35 + Math.random() * 0.3),
        len: 90 + Math.random() * 90,
        life: 1,
      };
    };

    const draw = (t: number) => {
      if (!running) return;
      const dt = last ? Math.min(t - last, 50) : 16;
      last = t;

      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        s.x += s.v * dt;
        if (s.x > w + 3) s.x = -3;
        const tw = 0.45 + 0.55 * Math.sin(t * 0.0015 + s.p);
        const alpha = s.a * tw;

        if (s.glow && glowSprite) {
          const g = s.r * 9;
          ctx.globalAlpha = alpha * 0.55;
          ctx.drawImage(glowSprite, s.x - g / 2, s.y - g / 2, g, g);
        }
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }

      if (!meteor && Math.random() < METEOR_CHANCE) spawnMeteor();

      if (meteor) {
        meteor.x += meteor.vx * dt;
        meteor.y += meteor.vy * dt;
        meteor.life -= dt / 1100;

        const tailX = meteor.x - meteor.vx * meteor.len;
        const tailY = meteor.y - meteor.vy * meteor.len;
        const grad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${Math.max(0, meteor.life) * 0.9})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.globalAlpha = 1;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        if (meteor.life <= 0 || meteor.x > w + 120 || meteor.y > h + 120) meteor = null;
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const go = () => {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(draw);
    };

    build();
    raf = requestAnimationFrame(draw);

    let timer = 0;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(build, 200);
    };
    const onVisibility = () => (document.hidden ? stop() : go());
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? go() : stop()), {
      threshold: 0,
    });
    io.observe(canvas);

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      io.disconnect();
      window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
