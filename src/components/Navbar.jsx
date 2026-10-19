import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
          aung<span className="text-[var(--color-accent)]">.dev</span>
        </NavLink>
        <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-[var(--color-surface-2)] text-[var(--color-ink)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[var(--color-accent)] hover:bg-[var(--color-surface-2)]"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
