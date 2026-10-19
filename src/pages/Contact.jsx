import { Mail, Phone, FileText } from "lucide-react";

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent-dim)] bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm text-[var(--color-accent)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        Open to Data Analyst roles
      </span>

      <h1 className="mt-6 font-[var(--font-display)] text-4xl font-semibold text-[var(--color-ink)]">Contact</h1>
      <p className="mt-2 text-[var(--color-muted)]">Interested in working together? I'd love to hear from you.</p>

      <div className="mt-8 max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <p className="text-xs text-[var(--color-muted)]">Email</p>
        <p className="mt-1 text-[var(--color-ink)]">aungmm27002@gmail.com</p>

        <p className="mt-5 text-xs text-[var(--color-muted)]">Phone</p>
        <p className="mt-1 text-[var(--color-ink)]">+65 8197 0484</p>
        <p className="mt-1 text-[var(--color-ink)]">+65 8832 2384</p>

        <div className="mt-6 flex gap-3">
          <a
            href="mailto:aungmm27002@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:+6581970484"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Call"
          >
            <Phone size={18} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label="Resume"
          >
            <FileText size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
