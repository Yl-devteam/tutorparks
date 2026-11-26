import { BrandName } from "./brand-name";
import { Icon } from "./icon";

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-rule/80 bg-canvas/90 shadow-card backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-12">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-secondary shadow-sm">
            <Icon name="local_library" filled className="text-[20px]" />
          </div>
          <BrandName
            className="hidden font-sans text-xl font-bold tracking-tight sm:inline"
            tutorClassName="text-ink"
          />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#demo-booking"
            className="font-sans text-sm font-semibold text-primary"
          >
            Free Trial
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
        <a className="btn-primary whitespace-nowrap" href="#demo-booking">
          Book a free trial class
        </a>
      </div>
    </header>
  );
}
