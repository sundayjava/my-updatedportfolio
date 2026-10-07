"use client";

/**
 * Stateless by design.
 *
 * The icon is chosen in CSS from the `data-theme` attribute (see globals.css),
 * so this renders identically on the server and client — no hydration mismatch,
 * no mount flicker, and no state to keep in sync with the DOM. The attribute is
 * set before first paint by NO_FLASH_SCRIPT in layout.tsx.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked — the choice applies but will not persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-secondary transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden
      >
        <g className="icon-light">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </g>
        <g className="icon-dark">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </g>
      </svg>
    </button>
  );
}
