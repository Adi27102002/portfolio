export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>© {new Date().getFullYear()} Aung Myint Myat</p>
        <p className="font-[var(--font-mono)] text-xs">Built with React + Tailwind</p>
      </div>
    </footer>
  );
}
