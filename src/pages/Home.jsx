import { useState } from "react";
import { Mail, ChevronDown } from "lucide-react";

const stack = [
  { label: "Vite", slug: "vite" },
  { label: "Tailwind CSS", slug: "tailwindcss" },
  { label: "JavaScript", slug: "javascript" },
  { label: "Python", slug: "python" },
  { label: "Node.js", slug: "nodedotjs" },
  { label: "PostgreSQL", slug: "postgresql" },
  { label: "React", slug: "react" },
];

const skillGroups = [
  {
    title: "Data & Analysis",
    items: ["Python", "SQL", "Pandas", "NumPy", "Scikit-learn", "Data Visualization", "Power BI", "Excel"],
  },
  {
    title: "Software Development",
    items: ["JavaScript", "React", "Next.js", "Node.js", "Flask", "HTML", "CSS"],
  },
  {
    title: "Business & Analysis",
    items: ["Requirements Gathering", "Stakeholder Communication", "Process Improvement", "Agile"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "REST APIs", "PostgreSQL", "Vercel"],
  },
];

const whatIDo = [
  {
    title: "Data Analysis & Modeling",
    body: "Cleaning and exploring datasets, building predictive models, and turning raw numbers into insights a business can act on.",
  },
  {
    title: "Full-Stack Development",
    body: "Building complete web applications end to end — from database and API to a working interface, using React, Flask, and PostgreSQL.",
  },
  {
    title: "Requirements & Stakeholder Communication",
    body: "Translating business needs into technical specs, and technical findings back into plain language for non-technical stakeholders.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      {whatIDo.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-[var(--color-ink)]">{item.title}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-[var(--color-muted)] transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <p className="font-[var(--font-mono)] text-sm text-[var(--color-muted)]">Singapore</p>
        <h1 className="font-[var(--font-display)] text-5xl font-semibold leading-tight text-[var(--color-ink)] sm:text-6xl">
          Aung Myint Myat
        </h1>
        <p className="text-lg font-semibold text-[var(--color-muted)]">
          Data Analyst • Full-Stack Developer
        </p>
        <p className="max-w-xl text-lg text-[var(--color-muted)]">
          Data Analyst turning raw data into decisions — with a full-stack developer's ability
          to build the tools that get it there.
        </p>
        <div className="flex items-center gap-3 pt-2">
          {/* TODO: replace with your real GitHub/LinkedIn URLs */}
          <a
            href="https://github.com/Adi27102002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="GitHub"
          >
            <img src="https://cdn.simpleicons.org/github/EDEFEC" alt="" width={18} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/aung-myint-myat-4172a63b8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:aungmm27002@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
        <div className="w-full overflow-hidden pt-4">
          <div className="flex w-max animate-scroll-x">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center gap-6 pr-6 font-[var(--font-mono)] text-xs text-[var(--color-muted)]"
                aria-hidden={copy === 1}
              >
                {stack.map((s) => (
                  <span key={`${copy}-${s.label}`} className="flex shrink-0 items-center gap-2">
                    <img
                      src={`https://cdn.simpleicons.org/${s.slug}/8B948E`}
                      alt=""
                      className="h-3.5 w-3.5"
                    />
                    {s.label}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Skills */}
      <section className="mt-20 grid gap-6 sm:grid-cols-5">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_30px_-10px_var(--color-accent)] sm:col-span-2">
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">About</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            Computer Science graduate specializing in Big Data, with hands-on experience in data
            analysis, machine learning, and predictive modeling using Python, SQL, and data
            visualization tools. I've also built and shipped a full corporate website solo, end to
            end, so I'm as comfortable turning a dataset into a model as I am turning a
            requirement into a working product.
          </p>
          <div className="mt-6 flex items-stretch">
            <div className="flex-1 pr-4">
              <p className="text-2xl font-bold text-[var(--color-accent)]">3</p>
              <p className="mt-0.5 text-xs text-[var(--color-muted)]">ML Projects</p>
            </div>
            <div className="w-px shrink-0 bg-[var(--color-border)]" />
            <div className="flex-1 px-4">
              <p className="text-2xl font-bold text-[var(--color-accent)]">1</p>
              <p className="mt-0.5 text-xs text-[var(--color-muted)]">Solo Production Site</p>
            </div>
            <div className="w-px shrink-0 bg-[var(--color-border)]" />
            <div className="flex-1 pl-4">
              <p className="text-2xl font-bold text-[var(--color-accent)]">2026</p>
              <p className="mt-0.5 text-xs text-[var(--color-muted)]">Grad Year</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_30px_-10px_var(--color-accent)] sm:col-span-3">
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">Skills</h2>
          <div className="mt-3 flex flex-col gap-3">
            {skillGroups.map((g) => (
              <div key={g.title}>
                <p className="text-xs text-[var(--color-muted)]">{g.title}</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-0.5 font-[var(--font-mono)] text-xs text-[var(--color-ink)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="mt-20">
        <h2 className="mb-5 font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
          What I do
        </h2>
        <Accordion />
      </section>
    </div>
  );
}
