import { Icon } from "./icon";

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-rule/80 bg-canvas/90 shadow-card backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-12">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-secondary shadow-sm">
            <Icon name="local_library" filled className="text-[20px]" />
          </div>
          <span className="hidden font-sans text-xl font-bold tracking-tight text-ink sm:inline">
            TutorParks
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#subjects-section"
            className="font-sans text-sm font-semibold text-primary"
          >
            Subjects
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-ink-subtle transition-colors hover:text-ink"
          >
            How It Works
          </a>
          <a
            href="#demo-booking"
            className="text-sm font-medium text-ink-subtle transition-colors hover:text-ink"
          >
            Free Demo
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-ink-subtle transition-colors hover:text-ink"
          >
            Parent Reviews
          </a>
          <a
            href="#contact-advisors"
            className="text-sm font-medium text-ink-subtle transition-colors hover:text-ink"
          >
            Contact
          </a>
          <a
            href="#teach-with-us"
            className="flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-chip-ochre-fg"
          >
            <Icon name="school" className="text-[16px]" />
            <span>Teach With Us</span>
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-4">
          <a
            href="tel:8005550199"
            className="hidden items-center gap-1.5 rounded border border-border/60 bg-canvas-raised px-3.5 py-2 type-label-sm text-ink-subtle transition-colors hover:text-ink xl:flex"
          >
            <Icon name="call" className="text-[16px] text-primary" />
            <span>(800) 555-0199</span>
          </a>
          <a className="btn-primary whitespace-nowrap" href="#demo-booking">
            Book 30-Min Free Demo
          </a>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-canvas-inset">
            <Icon name="person" className="text-[20px] text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
