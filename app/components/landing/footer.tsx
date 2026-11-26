import { Icon } from "./icon";

export function LandingFooter() {
  return (
    <footer className="w-full bg-primary-hover text-on-primary/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 pr-0 lg:col-span-2 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-secondary">
                <Icon name="local_library" filled className="text-[18px]" />
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-on-primary">
                TutorParks
              </span>
            </div>
            <p className="type-body-sm max-w-sm leading-relaxed text-on-primary/70">
              Empowering K-12 students to excel in English, Math, and Science
              through personalized 1-on-1 and small group live online classes.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold text-on-primary">
              Subjects
            </h3>
            <ul className="space-y-2.5 type-body-sm text-on-primary/70">
              <li>
                <a className="transition-colors hover:text-on-primary" href="#subjects-section">
                  Elementary K-5
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-on-primary" href="#subjects-section">
                  Middle School 6-8
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-on-primary" href="#subjects-section">
                  High School 9-12
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-on-primary" href="#subjects-section">
                  AP &amp; Honors Prep
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold text-on-primary">
              Company
            </h3>
            <ul className="space-y-2.5 type-body-sm text-on-primary/70">
              <li>
                <a className="transition-colors hover:text-on-primary" href="#how-it-works">
                  About Us
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-on-primary" href="#reviews">
                  Verified Tutors
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
                  Safety &amp; Trust
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-on-primary" href="#teach-with-us">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold text-on-primary">
              Support
            </h3>
            <ul className="space-y-2.5 type-body-sm text-on-primary/70">
              <li>
                <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
                  Help Center
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-on-primary" href="#demo-booking">
                  Schedule Consultation
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary pt-6 type-body-sm text-on-primary/70 sm:flex-row">
          <p>© 2025 TutorParks Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
              Privacy Policy
            </a>
            <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
              Terms of Service
            </a>
            <a className="transition-colors hover:text-on-primary" href="#contact-advisors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
