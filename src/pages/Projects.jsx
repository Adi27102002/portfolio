import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";

const projects = [
  {
    title: "CTR Holdings Corporate Website",
    category: "Web Development",
    description:
      "Sole developer on a full corporate website rebuild for a Hong Kong-listed Singapore construction group (1,800+ employees) — 7 core pages plus 20 project case studies, an automated pipeline for daily HKEX filings, and full bilingual support, built and shipped end to end.",
    tags: ["JavaScript", "fullPage.js", "GitHub Actions", "Puppeteer", "Vercel"],
    link: "https://ctr-holdings-website.vercel.app",
  },
  {
    title: "Real Estate Price Prediction (Singapore)",
    category: "Data & ML",
    description:
      "An ML platform built with a 5-person team, predicting Singapore property prices from real URA transaction data. Combines XGBoost, Random Forest, and TensorFlow/Keras models with geospatial feature engineering (proximity to MRT/malls) and NLP-based sentiment analysis on user reviews — serving five user tiers, from public users to property agents, with role-based access control.",
    tags: ["Python", "TensorFlow", "XGBoost", "Scikit-learn", "React"],
    link: "",
  },
  {
    title: "Reinforcement Learning Robotic Arm",
    category: "Data & ML",
    description:
      "A simulated Kuka robotic arm trained with Proximal Policy Optimization (PPO) to complete pick-and-place tasks, modeled as a Markov Decision Process across state, action, reward, and transition dynamics. Built in PyBullet with stable-baselines3 — training loss dropped from 130 to 14.6 and average reward rose from -1100 to -800, reaching an 85% task success rate versus 10% for a random-policy baseline.",
    tags: ["Python", "PyBullet", "stable-baselines3", "Reinforcement Learning"],
    link: "",
  },
  {
    title: "Bird Species Recognition",
    category: "Data & ML",
    description:
      "A fine-grained image classifier distinguishing 200 bird species on the CUB-200-2011 dataset (11,788 images), benchmarking a custom CNN against ResNet-18 and EfficientNet-B3 with transfer learning. EfficientNet-B3 reached 79.44% top-1 accuracy in 25 epochs using mixed-precision training and AdamW optimization, versus 16.67% for the from-scratch CNN baseline. Includes detailed error analysis via confusion matrices to identify the most-confused species pairs.",
    tags: ["Python", "PyTorch", "EfficientNet", "ResNet", "Transfer Learning"],
    link: "",
  },
];

const categories = ["All", "Web Development", "Data & ML"];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="font-[var(--font-display)] text-4xl font-semibold text-[var(--color-ink)]">Projects</h1>
      <p className="mt-2 text-[var(--color-muted)]">A record of things I've built — search or filter to browse.</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects (name, tags, description)..."
            className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 pl-10 pr-4 text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {filtered.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                {p.title}
              </h3>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                  aria-label={`Open ${p.title}`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-0.5 font-[var(--font-mono)] text-xs text-[var(--color-ink)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-[var(--color-muted)]">
            No projects match that search.
          </p>
        )}
      </div>
    </div>
  );
}
