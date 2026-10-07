/**
 * Real, shippable work — the page you send to a prospective client.
 *
 * Rules for this file:
 *  - every entry must be live at `url` and owned or cleared for showing
 *  - `highlights` state only what the build actually does; no invented metrics
 *  - leave `metrics` out entirely rather than estimating
 */
export type Project = {
  name: string;
  url: string;
  vertical: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  image: string;
  /** true = ours outright, free to show and to adapt for a client */
  owned: boolean;
  /** a foundation we can adapt for a client rather than a one-off build */
  readyToAdapt?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "AllTimeScores",
    url: "https://www.alltimescores.com",
    vertical: "Sports media & live data",
    summary:
      "A live football platform covering scores, fixtures, league tables, news and long-form analysis across the Premier League, La Liga, Serie A, Bundesliga, Ligue 1 and the Champions League.",
    role: "Founder — design, build, deployment and monetisation",
    stack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Server-Sent Events",
      "Contabo VPS",
      "Coolify",
    ],
    highlights: [
      "Custom Node.js backend handling the CMS, user auth, comments and football data",
      "Fixture and result data ingested by scheduled polling; editorial content arrives by webhook",
      "Server-Sent Events push new posts and fresh match data to the frontend in real time",
      "PostgreSQL for persistence, Redis for caching and real-time fan-out",
      "Self-hosted on a Contabo VPS, deployed and managed through Coolify",
      "Monetised with AdSense, instrumented with GA4, cookie consent handled end to end",
    ],
    image: "/work/alltimescores.webp",
    owned: true,
    featured: true,
  },
  {
    name: "Ironline Group",
    url: "https://construction-company-psi.vercel.app",
    vertical: "Construction & building materials",
    summary:
      "A site for a firm combining architecture, materials supply and contracting — built to win quotes, with services, a materials catalogue and a project portfolio under one roof.",
    role: "Design and build",
    stack: ["Next.js", "React"],
    highlights: [
      "Quote capture as the primary conversion path throughout",
      "Separate service, materials and project sections for distinct buyer journeys",
      "Credibility signals (licensing, insurance, years trading) built into the layout",
      "Light and dark themes",
    ],
    image: "/work/ironline.webp",
    owned: true,
    readyToAdapt: true,
    featured: true,
  },
  {
    name: "Greenfield Secondary School",
    url: "https://school-management-system-ten-mocha.vercel.app/",
    vertical: "Education",
    summary:
      "A secondary school site built around the thing parents and students actually come for — checking results — with announcements, an academic calendar and admissions information around it.",
    role: "Design and build",
    stack: ["Next.js", "React"],
    highlights: [
      "Student result lookup as the primary action, surfaced in the nav and the hero",
      "Announcements feed and academic calendar for the school year",
      "Admissions and programme information for prospective parents",
      "Light and dark themes",
    ],
    image: "/work/greenfield.webp",
    owned: true,
    readyToAdapt: true,
  },
];


/**
 * The shared backend. Described separately because it is not a feature of one
 * site — it is the thing that makes the others fast to build.
 */
export const platform = {
  name: "The platform behind them",
  summary:
    "A single Node.js backend built to serve more than one frontend. It handles content, identity and live data, so a new product on top of it starts with those problems already solved.",
  capabilities: [
    {
      title: "Content & editorial",
      body: "A full CMS with webhook-driven publishing, so editors work in their own tooling and content lands automatically.",
    },
    {
      title: "Identity & community",
      body: "User authentication, account management and threaded comments, shared across every product on the platform.",
    },
    {
      title: "Live data ingestion",
      body: "Scheduled polling against football data providers, normalised and stored rather than passed straight through.",
    },
    {
      title: "Real-time delivery",
      body: "Server-Sent Events push new posts and updated match data to connected clients, with Redis handling fan-out.",
    },
  ],
  infrastructure: [
    { label: "Runtime", value: "Node.js" },
    { label: "Database", value: "PostgreSQL" },
    { label: "Cache & pub/sub", value: "Redis" },
    { label: "Hosting", value: "Contabo VPS, self-managed" },
    { label: "Deployment", value: "Coolify" },
  ],
} as const;
